import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { hash } from 'bcryptjs';
import {
  PrismaClient,
  UserRole,
  UserStatus,
  RecordStatus,
  StockMovementType,
} from '../src/generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  // 1. Seed Owner
  const owner = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {
      name: 'Chủ cửa hàng demo',
      role: UserRole.OWNER,
      status: UserStatus.ACTIVE,
    },
    create: {
      username: 'admin',
      passwordHash: await hash('123456', 10),
      name: 'Chủ cửa hàng demo',
      phone: '0901234567',
      role: UserRole.OWNER,
      status: UserStatus.ACTIVE,
    },
  });

  // 2. Seed Employee
  await prisma.user.upsert({
    where: { username: 'nhanvien' },
    update: {
      name: 'Nhân viên thu ngân',
      role: UserRole.EMPLOYEE,
      status: UserStatus.ACTIVE,
    },
    create: {
      username: 'nhanvien',
      passwordHash: await hash('123456', 10),
      name: 'Nhân viên thu ngân',
      phone: '0909876543',
      role: UserRole.EMPLOYEE,
      status: UserStatus.ACTIVE,
    },
  });

  // 3. Seed Categories
  const categoriesData = [
    { code: 'CAT-DAY', name: 'Dây giày' },
    { code: 'CAT-VESINH', name: 'Vệ sinh & Bảo quản' },
    { code: 'CAT-LOT', name: 'Lót giày & Phụ kiện' },
  ];

  const categoryMap = new Map<string, string>();
  for (const cat of categoriesData) {
    const record = await prisma.category.upsert({
      where: { code: cat.code },
      update: { name: cat.name, status: RecordStatus.ACTIVE },
      create: { code: cat.code, name: cat.name, status: RecordStatus.ACTIVE },
    });
    categoryMap.set(cat.code, record.id);
  }

  // 4. Seed Products
  const now = new Date();
  const productsData = [
    {
      sku: 'SKU-DAY-01',
      name: 'Dây giày thể thao',
      categoryCode: 'CAT-DAY',
      salePrice: 35000,
      costPrice: 18000,
      unit: 'đôi',
      stock: 28,
      alertThreshold: 5,
      agedStockThresholdDays: 30,
      lastReceivedAt: new Date(now.getTime() - 10 * 86400000), // 10 ngày trước
    },
    {
      sku: 'SKU-KEO-01',
      name: 'Keo dán giày chuyên dụng',
      categoryCode: 'CAT-VESINH',
      salePrice: 78000,
      costPrice: 42000,
      unit: 'tuýp',
      stock: 12,
      alertThreshold: 5,
      agedStockThresholdDays: 30,
      lastReceivedAt: new Date(now.getTime() - 15 * 86400000), // 15 ngày trước
    },
    {
      sku: 'SKU-LOT-01',
      name: 'Lót giày êm chân',
      categoryCode: 'CAT-LOT',
      salePrice: 65000,
      costPrice: 35000,
      unit: 'đôi',
      stock: 7,
      alertThreshold: 5,
      agedStockThresholdDays: 30,
      lastReceivedAt: new Date(now.getTime() - 20 * 86400000), // 20 ngày trước
    },
    {
      sku: 'SKU-XIT-01',
      name: 'Chai xịt khử mùi giày',
      categoryCode: 'CAT-VESINH',
      salePrice: 55000,
      costPrice: 30000,
      unit: 'chai',
      stock: 15,
      alertThreshold: 5,
      agedStockThresholdDays: 30,
      lastReceivedAt: new Date(now.getTime() - 40 * 86400000), // 40 ngày trước (tồn lâu nếu ngưỡng 30 ngày)
    },
  ];

  for (const p of productsData) {
    const categoryId = categoryMap.get(p.categoryCode)!;
    const existing = await prisma.product.findUnique({ where: { sku: p.sku } });

    if (!existing) {
      const created = await prisma.product.create({
        data: {
          sku: p.sku,
          name: p.name,
          categoryId,
          salePrice: p.salePrice,
          costPrice: p.costPrice,
          unit: p.unit,
          stock: p.stock,
          alertThreshold: p.alertThreshold,
          agedStockThresholdDays: p.agedStockThresholdDays,
          lastReceivedAt: p.lastReceivedAt,
          status: RecordStatus.ACTIVE,
        },
      });

      // Ghi nhận StockMovement ban đầu cho sản phẩm
      await prisma.stockMovement.create({
        data: {
          productId: created.id,
          type: StockMovementType.RECEIPT,
          quantityDelta: p.stock,
          stockBefore: 0,
          stockAfter: p.stock,
          referenceType: 'INITIAL_SEED',
          referenceId: 'SEED-001',
          createdById: owner.id,
          reason: 'Khởi tạo tồn kho ban đầu',
        },
      });
    } else {
      await prisma.product.update({
        where: { id: existing.id },
        data: {
          name: p.name,
          categoryId,
          salePrice: p.salePrice,
          costPrice: p.costPrice,
          unit: p.unit,
          alertThreshold: p.alertThreshold,
          agedStockThresholdDays: p.agedStockThresholdDays,
          lastReceivedAt: p.lastReceivedAt,
          status: RecordStatus.ACTIVE,
        },
      });
    }
  }

  console.log('Seed completed successfully.');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
