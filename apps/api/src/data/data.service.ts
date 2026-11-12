import { BadRequestException, Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { compare } from 'bcryptjs';
import {
  PrismaClient,
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  RecordStatus,
  StockMovementType,
  UserRole,
  UserStatus,
} from '../generated/prisma/client';

export type InventoryStatus = 'OUT_OF_STOCK' | 'LOW_STOCK' | 'AGED' | 'IN_STOCK';

/**
 * Quy tắc tính trạng thái tồn kho chuẩn theo BR-UC4.4-08 và Figma UC_7.8:
 * 1. OUT_OF_STOCK: stock === 0
 * 2. LOW_STOCK: 0 < stock <= alertThreshold
 * 3. AGED: stock > alertThreshold và tuổi tồn (tính từ lastReceivedAt) >= agedStockThresholdDays
 * 4. IN_STOCK: các trường hợp còn lại
 */
export function resolveInventoryStatus(
  stock: number,
  alertThreshold: number,
  agedStockThresholdDays: number,
  lastReceivedAt: Date | null | undefined,
  now = new Date(),
): InventoryStatus {
  if (stock <= 0) return 'OUT_OF_STOCK';
  if (stock <= alertThreshold) return 'LOW_STOCK';
  if (lastReceivedAt) {
    const diffDays = Math.floor((now.getTime() - new Date(lastReceivedAt).getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays >= agedStockThresholdDays) {
      return 'AGED';
    }
  }
  return 'IN_STOCK';
}

/**
 * Kiểu bản ghi sản phẩm trả về cho client.
 * Bao gồm các trường chuẩn trong database và trường `price` tương thích tạm thời.
 */
export type ProductRecord = {
  id: string;
  sku: string;
  categoryId: string;
  name: string;
  salePrice: number;
  costPrice: number;
  unit: string;
  stock: number;
  alertThreshold: number;
  agedStockThresholdDays: number;
  lastReceivedAt: Date | null;
  status: RecordStatus;
  inventoryStatus: InventoryStatus;
  /** @deprecated Lớp tương thích tạm thời cho demo hiện tại (mapped từ salePrice) */
  price: number;
};

export type DemoUser = {
  id: string;
  username: string;
  name: string;
  role: string;
};

type OrderInput = { productId: string; quantity: number };

@Injectable()
export class DataService implements OnModuleDestroy {
  private readonly mode = process.env.DATA_MODE ?? 'memory';
  private readonly prisma: PrismaClient | null;

  // Dữ liệu mẫu dùng trong chế độ memory mode
  private readonly categories = [
    { id: 'cat-1', code: 'CAT-DAY', name: 'Dây giày', status: RecordStatus.ACTIVE },
    { id: 'cat-2', code: 'CAT-VESINH', name: 'Vệ sinh & Bảo quản', status: RecordStatus.ACTIVE },
    { id: 'cat-3', code: 'CAT-LOT', name: 'Lót giày & Phụ kiện', status: RecordStatus.ACTIVE },
  ];

  private readonly products: ProductRecord[] = [
    {
      id: 'p-1',
      sku: 'SKU-DAY-01',
      categoryId: 'cat-1',
      name: 'Dây giày thể thao',
      salePrice: 35_000,
      costPrice: 18_000,
      unit: 'đôi',
      stock: 28,
      alertThreshold: 5,
      agedStockThresholdDays: 30,
      lastReceivedAt: new Date(Date.now() - 10 * 86400000),
      status: RecordStatus.ACTIVE,
      inventoryStatus: 'IN_STOCK',
      price: 35_000,
    },
    {
      id: 'p-2',
      sku: 'SKU-KEO-01',
      categoryId: 'cat-2',
      name: 'Keo dán giày chuyên dụng',
      salePrice: 78_000,
      costPrice: 42_000,
      unit: 'tuýp',
      stock: 12,
      alertThreshold: 5,
      agedStockThresholdDays: 30,
      lastReceivedAt: new Date(Date.now() - 15 * 86400000),
      status: RecordStatus.ACTIVE,
      inventoryStatus: 'IN_STOCK',
      price: 78_000,
    },
    {
      id: 'p-3',
      sku: 'SKU-LOT-01',
      categoryId: 'cat-3',
      name: 'Lót giày êm chân',
      salePrice: 65_000,
      costPrice: 35_000,
      unit: 'đôi',
      stock: 7,
      alertThreshold: 5,
      agedStockThresholdDays: 30,
      lastReceivedAt: new Date(Date.now() - 20 * 86400000),
      status: RecordStatus.ACTIVE,
      inventoryStatus: 'IN_STOCK',
      price: 65_000,
    },
    {
      id: 'p-4',
      sku: 'SKU-XIT-01',
      categoryId: 'cat-2',
      name: 'Chai xịt khử mùi giày',
      salePrice: 55_000,
      costPrice: 30_000,
      unit: 'chai',
      stock: 15,
      alertThreshold: 5,
      agedStockThresholdDays: 30,
      lastReceivedAt: new Date(Date.now() - 40 * 86400000),
      status: RecordStatus.ACTIVE,
      inventoryStatus: 'AGED',
      price: 55_000,
    },
  ];

  constructor() {
    if (this.mode === 'postgres') {
      const connectionString = process.env.DATABASE_URL;
      if (!connectionString) throw new Error('DATABASE_URL is required in postgres mode');
      this.prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
    } else {
      this.prisma = null;
    }
  }

  async onModuleDestroy() {
    await this.prisma?.$disconnect();
  }

  async authenticate(username: string, password: string): Promise<DemoUser | null> {
    if (!this.prisma) {
      if (username === 'admin' && password === '123456') {
        return { id: 'u-demo-owner', username: 'admin', name: 'Chủ cửa hàng demo', role: 'OWNER' };
      }
      if (username === 'nhanvien' && password === '123456') {
        return { id: 'u-demo-emp', username: 'nhanvien', name: 'Nhân viên thu ngân', role: 'EMPLOYEE' };
      }
      return null;
    }

    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user || user.status !== UserStatus.ACTIVE || !(await compare(password, user.passwordHash))) {
      return null;
    }
    return { id: user.id, username: user.username, name: user.name, role: user.role };
  }

  async listProducts(): Promise<ProductRecord[]> {
    if (!this.prisma) {
      return this.products.map((p) => ({
        ...p,
        inventoryStatus: resolveInventoryStatus(
          p.stock,
          p.alertThreshold,
          p.agedStockThresholdDays,
          p.lastReceivedAt,
        ),
      }));
    }
    const dbProducts = await this.prisma.product.findMany({
      where: { status: RecordStatus.ACTIVE },
      orderBy: { createdAt: 'asc' },
    });
    return dbProducts.map((p) => ({
      id: p.id,
      sku: p.sku,
      categoryId: p.categoryId,
      name: p.name,
      salePrice: p.salePrice,
      costPrice: p.costPrice,
      unit: p.unit,
      stock: p.stock,
      alertThreshold: p.alertThreshold,
      agedStockThresholdDays: p.agedStockThresholdDays,
      lastReceivedAt: p.lastReceivedAt,
      status: p.status,
      inventoryStatus: resolveInventoryStatus(
        p.stock,
        p.alertThreshold,
        p.agedStockThresholdDays,
        p.lastReceivedAt,
      ),
      // Lớp tương thích tạm thời:
      price: p.salePrice,
    }));
  }

  /**
   * Tạo sản phẩm mới theo chuẩn UC_7.4:
   * - Tồn kho khởi tạo luôn bằng 0 (chống tạo tồn kho ngoài luồng audit).
   * - Giá vốn costPrice phải hợp lệ hoặc mặc định bằng 0, không tự động tính bằng salePrice * 0.6.
   */
  async createProduct(input: {
    name: string;
    salePrice?: number;
    price?: number;
    costPrice?: number;
    unit?: string;
    alertThreshold?: number;
    agedStockThresholdDays?: number;
    categoryId?: string;
  }): Promise<ProductRecord> {
    const salePrice = input.salePrice ?? input.price;
    if (salePrice === undefined || salePrice <= 0) {
      throw new BadRequestException('Giá bán phải lớn hơn 0');
    }
    const costPrice = input.costPrice !== undefined ? Math.max(0, input.costPrice) : 0;
    const unit = input.unit ?? 'cái';
    const alertThreshold = input.alertThreshold !== undefined ? Math.max(0, input.alertThreshold) : 5;
    const agedStockThresholdDays =
      input.agedStockThresholdDays !== undefined ? Math.max(0, input.agedStockThresholdDays) : 30;
    const categoryId = input.categoryId ?? (this.prisma ? undefined : this.categories[0].id);

    // Bắt buộc stock = 0 cho mọi sản phẩm tạo mới
    const stock = 0;

    if (!this.prisma) {
      if (this.products.some((product) => product.name.toLowerCase() === input.name.toLowerCase())) {
        throw new BadRequestException('Tên sản phẩm đã tồn tại');
      }
      const product: ProductRecord = {
        id: `p-${Date.now()}`,
        sku: `SKU-${Date.now().toString().slice(-4)}`,
        categoryId: categoryId ?? this.categories[0].id,
        name: input.name,
        salePrice,
        costPrice,
        unit,
        stock,
        alertThreshold,
        agedStockThresholdDays,
        lastReceivedAt: null,
        status: RecordStatus.ACTIVE,
        inventoryStatus: 'OUT_OF_STOCK',
        price: salePrice,
      };
      this.products.push(product);
      return { ...product };
    }

    // Đảm bảo có category mặc định nếu chưa truyền
    let targetCatId = categoryId;
    if (!targetCatId) {
      const defaultCat = await this.prisma.category.findFirst();
      if (!defaultCat) {
        const newCat = await this.prisma.category.create({
          data: { code: 'CAT-DEFAULT', name: 'Mặc định', status: RecordStatus.ACTIVE },
        });
        targetCatId = newCat.id;
      } else {
        targetCatId = defaultCat.id;
      }
    }

    const created = await this.prisma.product.create({
      data: {
        sku: `SKU-${Date.now().toString().slice(-4)}`,
        name: input.name,
        categoryId: targetCatId,
        salePrice,
        costPrice,
        unit,
        stock: 0, // Tuyệt đối không nhận stock từ client
        alertThreshold,
        agedStockThresholdDays,
        lastReceivedAt: null,
        status: RecordStatus.ACTIVE,
      },
    });

    return {
      id: created.id,
      sku: created.sku,
      categoryId: created.categoryId,
      name: created.name,
      salePrice: created.salePrice,
      costPrice: created.costPrice,
      unit: created.unit,
      stock: created.stock,
      alertThreshold: created.alertThreshold,
      agedStockThresholdDays: created.agedStockThresholdDays,
      lastReceivedAt: created.lastReceivedAt,
      status: created.status,
      inventoryStatus: 'OUT_OF_STOCK',
      price: created.salePrice,
    };
  }

  /**
   * Tạo đơn hàng và trừ tồn kho:
   * - Gộp các dòng có cùng productId để tránh trừ nhiều lần làm sai lệch điều kiện.
   * - Kiểm tra số lượng hợp lệ (> 0).
   * - Dùng cập nhật có điều kiện `updateMany({ where: { id: productId, status: ACTIVE, stock: { gte: qty } } })`
   *   trong transaction để ngăn chặn bán vượt tồn khi có giao dịch đồng thời (race condition).
   * - Ghi nhận StockMovement tương ứng trong cùng transaction.
   */
  async createOrder(userId: string, items: OrderInput[]) {
    if (!items || !items.length) {
      throw new BadRequestException('Đơn hàng phải có ít nhất một sản phẩm');
    }

    // 1. Kiểm tra quantity hợp lệ và gộp số lượng theo productId
    const aggregated = new Map<string, number>();
    for (const item of items) {
      if (!item.quantity || item.quantity <= 0 || !Number.isInteger(item.quantity)) {
        throw new BadRequestException('Số lượng sản phẩm trong đơn hàng phải là số nguyên dương');
      }
      const current = aggregated.get(item.productId) ?? 0;
      aggregated.set(item.productId, current + item.quantity);
    }

    if (!this.prisma) {
      return this.createMemoryOrder(aggregated, userId);
    }

    // 2. Thực hiện trong Prisma Transaction với Conditional Update
    return this.prisma.$transaction(async (tx) => {
      let total = 0;
      const orderLinesToCreate: Array<{
        productId: string;
        productName: string;
        quantity: number;
        unitPrice: number;
        lineTotal: number;
        stockBefore: number;
        stockAfter: number;
      }> = [];

      for (const [productId, quantity] of aggregated.entries()) {
        // Đọc snapshot thông tin giá và tên trước khi trừ
        const product = await tx.product.findUnique({
          where: { id: productId },
        });

        if (!product || product.status !== RecordStatus.ACTIVE) {
          throw new BadRequestException(`Sản phẩm không tồn tại hoặc đã ngừng kinh doanh (ID: ${productId})`);
        }

        // Cập nhật tồn kho có điều kiện (Conditional Update: stock >= quantity)
        const updateResult = await tx.product.updateMany({
          where: {
            id: productId,
            status: RecordStatus.ACTIVE,
            stock: { gte: quantity },
          },
          data: {
            stock: { decrement: quantity },
          },
        });

        if (updateResult.count === 0) {
          throw new BadRequestException(
            `Sản phẩm "${product.name}" không đủ số lượng tồn kho (Yêu cầu: ${quantity}, Tồn hiện tại: ${product.stock})`,
          );
        }

        // Đọc lại tồn kho sau khi trừ để ghi nhận StockMovement chính xác
        const updatedProduct = await tx.product.findUnique({
          where: { id: productId },
        });

        const stockAfter = updatedProduct?.stock ?? product.stock - quantity;
        const lineTotal = product.salePrice * quantity;
        total += lineTotal;

        orderLinesToCreate.push({
          productId: product.id,
          productName: product.name,
          quantity,
          unitPrice: product.salePrice,
          lineTotal,
          stockBefore: product.stock,
          stockAfter,
        });
      }

      // Tạo Order và các quan hệ
      const orderCode = `HD-${Date.now()}`;
      const order = await tx.order.create({
        data: {
          code: orderCode,
          total,
          subtotal: total,
          discount: 0,
          status: OrderStatus.COMPLETED,
          createdById: userId,
          items: {
            create: orderLinesToCreate.map((item) => ({
              productId: item.productId,
              productName: item.productName,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              lineTotal: item.lineTotal,
            })),
          },
          payments: {
            create: {
              method: PaymentMethod.CASH,
              amount: total,
              status: PaymentStatus.PAID,
            },
          },
        },
        include: { items: true, payments: true },
      });

      // Ghi nhận StockMovement kiểm toán trong cùng transaction
      for (const line of orderLinesToCreate) {
        await tx.stockMovement.create({
          data: {
            productId: line.productId,
            type: StockMovementType.SALE,
            quantityDelta: -line.quantity,
            stockBefore: line.stockBefore,
            stockAfter: line.stockAfter,
            referenceType: 'ORDER',
            referenceId: order.id,
            createdById: userId,
            reason: `Bán lẻ đơn hàng ${order.code}`,
          },
        });
      }

      return order;
    });
  }

  private createMemoryOrder(aggregated: Map<string, number>, userId: string) {
    let total = 0;
    const resolved: Array<{
      product: ProductRecord;
      quantity: number;
      stockBefore: number;
      stockAfter: number;
      unitPrice: number;
      lineTotal: number;
    }> = [];

    // Kiểm tra đủ tồn cho tất cả các mặt hàng trước khi trừ
    for (const [productId, quantity] of aggregated.entries()) {
      const product = this.products.find((p) => p.id === productId);
      if (!product || product.status !== RecordStatus.ACTIVE) {
        throw new BadRequestException('Sản phẩm không tồn tại hoặc đã ngừng kinh doanh');
      }
      if (product.stock < quantity) {
        throw new BadRequestException(
          `Sản phẩm "${product.name}" không đủ số lượng tồn kho (Yêu cầu: ${quantity}, Hiện có: ${product.stock})`,
        );
      }
      const lineTotal = product.salePrice * quantity;
      total += lineTotal;
      resolved.push({
        product,
        quantity,
        stockBefore: product.stock,
        stockAfter: product.stock - quantity,
        unitPrice: product.salePrice,
        lineTotal,
      });
    }

    // Trừ tồn kho nguyên tử trong bộ nhớ
    for (const item of resolved) {
      item.product.stock -= item.quantity;
      item.product.inventoryStatus = resolveInventoryStatus(
        item.product.stock,
        item.product.alertThreshold,
        item.product.agedStockThresholdDays,
        item.product.lastReceivedAt,
      );
    }

    const orderId = `o-${Date.now()}`;
    const orderCode = `HD-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${Date.now().toString().slice(-4)}`;

    return {
      id: orderId,
      code: orderCode,
      total,
      status: 'COMPLETED',
      createdById: userId,
      items: resolved.map(({ product, quantity, unitPrice, lineTotal }) => ({
        productId: product.id,
        productName: product.name,
        quantity,
        unitPrice,
        lineTotal,
      })),
      createdAt: new Date().toISOString(),
    };
  }
}
