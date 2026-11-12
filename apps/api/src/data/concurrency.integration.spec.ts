import { BadRequestException } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, RecordStatus } from '../generated/prisma/client';
import { DataService } from './data.service';

/**
 * Integration Test kiểm thử Concurrency & Race Condition trên cơ sở dữ liệu PostgreSQL.
 *
 * Yêu cầu để chạy test này:
 * - Docker daemon và PostgreSQL container đang chạy (ví dụ `docker compose up -d db`).
 * - Đặt RUN_POSTGRES_INTEGRATION=true và TEST_DATABASE_URL trỏ tới database test PostgreSQL.
 * - Đã chạy migration (`pnpm --filter api exec prisma migrate deploy`).
 *
 * Test này chứng minh cơ chế Conditional Update (`updateMany` có điều kiện `stock >= qty`)
 * trong Transaction thực sự ngăn chặn triệt để hiện tượng Overselling (bán vượt tồn / tồn âm)
 * khi nhiều tiến trình / request checkout đồng thời.
 */
describe('DataService PostgreSQL Concurrency Integration Test', () => {
  const databaseUrl = process.env.TEST_DATABASE_URL;
  const shouldRun = process.env.RUN_POSTGRES_INTEGRATION === 'true' && Boolean(databaseUrl);
  const originalDataMode = process.env.DATA_MODE;
  const originalDatabaseUrl = process.env.DATABASE_URL;
  let prisma: PrismaClient | null = null;
  let service: DataService | null = null;

  beforeAll(async () => {
    if (!shouldRun || !databaseUrl) return;

    process.env.DATA_MODE = 'postgres';
    process.env.DATABASE_URL = databaseUrl;
    prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: databaseUrl }) });
    await prisma.$connect();
    service = new DataService();
  });

  afterAll(async () => {
    await service?.onModuleDestroy();
    await prisma?.$disconnect();
    process.env.DATA_MODE = originalDataMode;
    process.env.DATABASE_URL = originalDatabaseUrl;
  });

  const runIfPostgres = shouldRun ? it : it.skip;

  runIfPostgres(
    'prevents negative stock when two concurrent checkouts race for the last remaining items',
    async () => {
      // 1. Chuẩn bị 1 sản phẩm có đúng 3 tồn kho
      const category = await prisma!.category.create({
        data: {
          code: `CAT-RACE-${Date.now()}`,
          name: 'Danh mục Test Concurrency',
          status: RecordStatus.ACTIVE,
        },
      });

      const product = await prisma!.product.create({
        data: {
          sku: `SKU-RACE-${Date.now()}`,
          name: `Sản phẩm Test Concurrency ${Date.now()}`,
          categoryId: category.id,
          salePrice: 100000,
          costPrice: 50000,
          stock: 3,
          alertThreshold: 5,
          agedStockThresholdDays: 30,
          status: RecordStatus.ACTIVE,
        },
      });

      const user = await prisma!.user.findFirst();

      try {
        // 2. Chạy 2 checkout đồng thời: mỗi checkout muốn mua 2 sản phẩm (Tổng nhu cầu: 4 > Tồn kho: 3)
        const [result1, result2] = await Promise.allSettled([
          service!.createOrder(user!.id, [{ productId: product.id, quantity: 2 }]),
          service!.createOrder(user!.id, [{ productId: product.id, quantity: 2 }]),
        ]);

      // 3. Một transaction phải thành công, một transaction phải bị từ chối
        const successes = [result1, result2].filter((r) => r.status === 'fulfilled');
        const failures = [result1, result2].filter((r) => r.status === 'rejected');

        expect(successes).toHaveLength(1);
        expect(failures).toHaveLength(1);

      // Transaction thất bại phải ném ra BadRequestException
        const failureReason = (failures[0] as PromiseRejectedResult).reason;
        expect(failureReason).toBeInstanceOf(BadRequestException);

      // 4. Kiểm tra tồn kho cuối cùng: phải là 1 (3 - 2), tuyệt đối không bao giờ âm (-1)
        const finalProduct = await prisma!.product.findUnique({ where: { id: product.id } });
        expect(finalProduct!.stock).toBe(1);

      // 5. Kiểm tra tính toàn vẹn: Không có Order dở dang hay StockMovement thừa
        const movements = await prisma!.stockMovement.findMany({
          where: { productId: product.id },
        });
        expect(movements).toHaveLength(1);
        expect(movements[0].quantityDelta).toBe(-2);
        expect(movements[0].stockBefore).toBe(3);
        expect(movements[0].stockAfter).toBe(1);
      } finally {
        const orders = await prisma!.order.findMany({
          where: { items: { some: { productId: product.id } } },
          select: { id: true },
        });
        const orderIds = orders.map((order) => order.id);

        await prisma!.stockMovement.deleteMany({ where: { productId: product.id } });
        if (orderIds.length) {
          await prisma!.payment.deleteMany({ where: { orderId: { in: orderIds } } });
          await prisma!.orderItem.deleteMany({ where: { orderId: { in: orderIds } } });
          await prisma!.order.deleteMany({ where: { id: { in: orderIds } } });
        }
        await prisma!.product.delete({ where: { id: product.id } });
        await prisma!.category.delete({ where: { id: category.id } });
      }
    },
  );
});

