import { BadRequestException } from '@nestjs/common';
import { DataService, resolveInventoryStatus } from './data.service';

describe('DataService memory mode', () => {
  let service: DataService;

  beforeEach(() => {
    process.env.DATA_MODE = 'memory';
    service = new DataService();
  });

  describe('Inventory Status Calculation (UC_7.8)', () => {
    const threshold = 5;
    const agedDays = 30;
    const now = new Date('2026-11-10T00:00:00Z');

    it('returns OUT_OF_STOCK when stock is 0', () => {
      const status = resolveInventoryStatus(0, threshold, agedDays, new Date('2026-10-01'), now);
      expect(status).toBe('OUT_OF_STOCK');
    });

    it('returns LOW_STOCK when 0 < stock <= alertThreshold', () => {
      const status = resolveInventoryStatus(3, threshold, agedDays, new Date('2026-10-01'), now);
      expect(status).toBe('LOW_STOCK');
    });

    it('returns AGED when stock > threshold and days since lastReceivedAt >= agedStockThresholdDays', () => {
      // 40 ngày trước
      const receivedAt = new Date('2026-10-01T00:00:00Z');
      const status = resolveInventoryStatus(15, threshold, agedDays, receivedAt, now);
      expect(status).toBe('AGED');
    });

    it('returns IN_STOCK when stock > threshold and days < agedStockThresholdDays', () => {
      // 10 ngày trước
      const receivedAt = new Date('2026-10-31T00:00:00Z');
      const status = resolveInventoryStatus(15, threshold, agedDays, receivedAt, now);
      expect(status).toBe('IN_STOCK');
    });
  });

  describe('Product Creation Audit Safety (UC_7.4)', () => {
    it('creates a new product with stock = 0 by default, regardless of input', async () => {
      const product = await service.createProduct({
        name: `Sản phẩm kiểm thử ${Date.now()}`,
        salePrice: 50000,
        costPrice: 25000,
      });

      expect(product.stock).toBe(0);
      expect(product.inventoryStatus).toBe('OUT_OF_STOCK');
    });

    it('rejects product creation when salePrice is zero or negative', async () => {
      await expect(
        service.createProduct({
          name: 'Sản phẩm giá 0',
          salePrice: 0,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);

      await expect(
        service.createProduct({
          name: 'Sản phẩm giá âm',
          salePrice: -1000,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
    });
  });

  describe('Order Creation & Concurrency Prevention (UC_2.1)', () => {
    it('creates an order and reduces stock accurately', async () => {
      const products = await service.listProducts();
      const product = products[0];
      const initialStock = product.stock;

      const order = await service.createOrder('u-demo', [
        { productId: product.id, quantity: 2 },
      ]);
      const after = await service.listProducts();

      expect(order.total).toBe(product.salePrice * 2);
      expect(after[0].stock).toBe(initialStock - 2);
    });

    it('rejects an order when quantity exceeds stock', async () => {
      await expect(
        service.createOrder('u-demo', [{ productId: 'p-1', quantity: 999 }]),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('rejects an order when quantity is zero or negative', async () => {
      await expect(
        service.createOrder('u-demo', [{ productId: 'p-1', quantity: 0 }]),
      ).rejects.toBeInstanceOf(BadRequestException);

      await expect(
        service.createOrder('u-demo', [{ productId: 'p-1', quantity: -5 }]),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('aggregates multiple lines with the same productId and commits correct total reduction', async () => {
      const products = await service.listProducts();
      const product = products[0];
      const initialStock = product.stock;

      // 2 dòng cùng productId: 1 cái và 2 cái -> tổng cộng 3 cái
      const order = await service.createOrder('u-demo', [
        { productId: product.id, quantity: 1 },
        { productId: product.id, quantity: 2 },
      ]);

      const after = await service.listProducts();
      expect(after[0].stock).toBe(initialStock - 3);
      expect(order.total).toBe(product.salePrice * 3);
    });

    it('rejects aggregated lines when sum exceeds available stock', async () => {
      const products = await service.listProducts();
      const product = products[2]; // stock = 7

      // Tổng yêu cầu: 4 + 4 = 8 > 7
      await expect(
        service.createOrder('u-demo', [
          { productId: product.id, quantity: 4 },
          { productId: product.id, quantity: 4 },
        ]),
      ).rejects.toBeInstanceOf(BadRequestException);

      // Tồn kho không bị trừ dở dang
      const after = await service.listProducts();
      expect(after[2].stock).toBe(product.stock);
    });
  });
});
