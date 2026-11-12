'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  CheckCircle2,
  PackagePlus,
  Printer,
  ShoppingCart,
  Search,
} from 'lucide-react';
import { apiRequest } from '@/lib/api';
import { type CartLine, loadCart, saveCart } from '@/lib/draft-db';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormField } from '@/components/ui/form-field';
import { LoadingState, EmptyState, ErrorState } from '@/components/ui/states';
import { ToastContainer, type ToastMessage } from '@/components/ui/toast';
import { ConfirmModal } from '@/components/ui/modal';
import { InventoryBadge, type InventoryStatus } from '@/components/ui/badge';

type Product = {
  id: string;
  sku?: string;
  name: string;
  price: number;
  salePrice?: number;
  stock: number;
  unit?: string;
  inventoryStatus?: InventoryStatus;
  alertThreshold?: number;
};

type Order = {
  id: string;
  code: string;
  total: number;
  status: string;
  createdAt: string;
  items: Array<{ productId: string; productName?: string; quantity: number; unitPrice: number }>;
};

// Tuyệt đối không cho client truyền `stock` khi tạo sản phẩm mới (chống tạo tồn kho ngoài luồng audit)
const productSchema = z.object({
  name: z.string().min(2, 'Tên sản phẩm phải có ít nhất 2 ký tự'),
  price: z.number().int().positive('Giá bán phải lớn hơn 0'),
  costPrice: z.number().int().min(0, 'Giá vốn không được âm'),
  unit: z.string().min(1, 'Đơn vị tính không được rỗng'),
});

type ProductForm = z.infer<typeof productSchema>;

const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

export interface LegacySalesDemoProps {
  token?: string | null;
  userRole?: string;
}

export function LegacySalesDemo({ token: propToken, userRole: propRole = 'OWNER' }: LegacySalesDemoProps) {
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(propToken ?? null);
  const [userRole, setUserRole] = useState(propRole);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [receipt, setReceipt] = useState<Order | null>(null);
  const [online, setOnline] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isCheckoutConfirmOpen, setIsCheckoutConfirmOpen] = useState(false);

  const addToast = (type: 'success' | 'error' | 'info', message: string) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    if (!propToken) {
      setToken(localStorage.getItem('kinkin-token'));
    } else {
      setToken(propToken);
    }
    const storedRole = localStorage.getItem('kinkin-role');
    if (storedRole) setUserRole(storedRole);

    void loadCart().then(setCart);
    setOnline(navigator.onLine);
    const updateOnline = () => setOnline(navigator.onLine);
    window.addEventListener('online', updateOnline);
    window.addEventListener('offline', updateOnline);
    return () => {
      window.removeEventListener('online', updateOnline);
      window.removeEventListener('offline', updateOnline);
    };
  }, [propToken]);

  useEffect(() => {
    void saveCart(cart);
  }, [cart]);

  const productForm = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
    defaultValues: { name: '', price: 45000, costPrice: 25000, unit: 'cái' },
  });

  const products = useQuery({
    queryKey: ['products', token],
    queryFn: () => apiRequest<Product[]>('/products', {}, token ?? undefined),
    enabled: Boolean(token),
  });

  const createProduct = useMutation({
    mutationFn: (values: ProductForm) =>
      apiRequest<Product>('/products', { method: 'POST', body: JSON.stringify(values) }, token ?? undefined),
    onSuccess: (newProd) => {
      productForm.reset({ name: '', price: 45000, costPrice: 25000, unit: 'cái' });
      void queryClient.invalidateQueries({ queryKey: ['products'] });
      addToast('success', `Đã thêm sản phẩm "${newProd.name}" (Tồn kho: 0, cần tạo phiếu nhập hàng)`);
    },
    onError: (err: Error) => {
      addToast('error', err.message || 'Không thể tạo sản phẩm');
    },
  });

  const createOrder = useMutation({
    mutationFn: () =>
      apiRequest<Order>('/orders', { method: 'POST', body: JSON.stringify({ items: cart }) }, token ?? undefined),
    onSuccess: (order) => {
      setReceipt(order);
      setCart([]);
      setIsCheckoutConfirmOpen(false);
      void queryClient.invalidateQueries({ queryKey: ['products'] });
      addToast('success', `Tạo đơn hàng ${order.code} thành công`);
    },
    onError: (err: Error) => {
      addToast('error', err.message || 'Lỗi khi tạo đơn hàng');
      setIsCheckoutConfirmOpen(false);
    },
  });

  const productMap = useMemo(
    () => new Map((products.data ?? []).map((product) => [product.id, product])),
    [products.data],
  );

  const filteredProducts = useMemo(() => {
    if (!products.data) return [];
    if (!searchTerm.trim()) return products.data;
    const term = searchTerm.toLowerCase();
    return products.data.filter(
      (p) => p.name.toLowerCase().includes(term) || (p.sku && p.sku.toLowerCase().includes(term)),
    );
  }, [products.data, searchTerm]);

  const cartTotal = cart.reduce((sum, line) => {
    const product = productMap.get(line.productId);
    const price = product?.salePrice ?? product?.price ?? 0;
    return sum + price * line.quantity;
  }, 0);

  function addToCart(product: Product) {
    setReceipt(null);
    setCart((current) => {
      const existing = current.find((line) => line.productId === product.id);
      if (existing) {
        return current.map((line) =>
          line.productId === product.id
            ? { ...line, quantity: Math.min(line.quantity + 1, product.stock) }
            : line,
        );
      }
      return [...current, { productId: product.id, quantity: 1 }];
    });
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Tạo hóa đơn bán lẻ</h1>
          <p className="text-xs text-[#64748b] mt-1">Chọn sản phẩm thêm vào giỏ hàng và thanh toán giao dịch.</p>
        </div>

        {/* Search Input Bar (Figma Node 1:10533, Hình 60) */}
        <div className="w-full max-w-xs">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm tên, mã sản phẩm…"
            prefixIcon={<Search className="size-4" />}
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
        {/* Danh sách sản phẩm */}
        <section className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#0f172a]">Danh sách sản phẩm</h2>
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {filteredProducts.length} mặt hàng
            </span>
          </div>

          {products.isLoading && <LoadingState message="Đang tải danh mục sản phẩm từ máy chủ…" />}
          {products.isError && (
            <ErrorState
              title="Lỗi tải sản phẩm"
              message={products.error?.message}
              onRetry={() => products.refetch()}
            />
          )}

          {!products.isLoading && !products.isError && filteredProducts.length === 0 && (
            <EmptyState
              title="Không tìm thấy sản phẩm"
              description={searchTerm ? `Không có sản phẩm nào khớp với "${searchTerm}".` : 'Chưa có sản phẩm nào trong kho.'}
            />
          )}

          <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => {
              const displayPrice = product.salePrice ?? product.price ?? 0;
              const status = product.inventoryStatus ?? (product.stock <= 0 ? 'OUT_OF_STOCK' : 'IN_STOCK');

              return (
                <article
                  key={product.id}
                  className="flex flex-col justify-between rounded-xl border border-[#e2e8f0] p-4 hover:border-blue-500/50 transition-colors bg-[#fdfdfd]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-semibold text-[#0f172a] line-clamp-1">{product.name}</h3>
                      <InventoryBadge status={status} stock={product.stock} />
                    </div>
                    {product.sku && <p className="text-[11px] text-[#64748b] mb-2">{product.sku}</p>}
                    <p className="text-base font-bold text-[#2563eb] mb-4">{money.format(displayPrice)}</p>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    disabled={product.stock <= 0}
                    onClick={() => addToCart(product)}
                    className="w-full"
                  >
                    {product.stock <= 0 ? 'Hết hàng' : 'Thêm vào đơn'}
                  </Button>
                </article>
              );
            })}
          </div>
        </section>

        {/* Giỏ hàng và Tạo nhanh */}
        <aside className="space-y-6">
          {/* Card Đơn đang soạn */}
          <section className="rounded-xl bg-[#0f172a] p-5 text-white shadow-xl border border-slate-800">
            <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShoppingCart className="size-5 text-blue-400" />
                <h2 className="text-base font-semibold text-white">Đơn đang soạn</h2>
              </div>
              <span className="text-xs text-slate-400">{cart.length} món</span>
            </div>

            {!cart.length && (
              <p className="py-6 text-center text-xs text-slate-400">
                Chưa có sản phẩm trong giỏ. Chọn sản phẩm bên trái để tạo đơn.
              </p>
            )}

            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {cart.map((line) => {
                const product = productMap.get(line.productId);
                if (!product) return null;
                const price = product.salePrice ?? product.price ?? 0;
                return (
                  <div
                    key={line.productId}
                    className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-2.5 text-xs"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-white truncate">{product.name}</p>
                      <p className="text-slate-400">
                        {line.quantity} × {money.format(price)}
                      </p>
                    </div>
                    <button
                      className="text-rose-400 hover:text-rose-300 font-medium cursor-pointer"
                      onClick={() => setCart((cur) => cur.filter((item) => item.productId !== line.productId))}
                    >
                      Xóa
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4 text-sm font-bold">
              <span>Tổng tiền:</span>
              <strong className="text-xl text-blue-400">{money.format(cartTotal)}</strong>
            </div>

            <Button
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white"
              variant="primary"
              size="lg"
              disabled={!cart.length || createOrder.isPending || !online}
              onClick={() => setIsCheckoutConfirmOpen(true)}
            >
              Thanh toán & Trừ kho
            </Button>
          </section>

          {/* Form thêm sản phẩm mới (OWNER only) theo chuẩn UC_7.4: Tồn kho mặc định bằng 0 */}
          {userRole === 'OWNER' && (
            <section className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2 border-b border-[#e2e8f0] pb-3">
                <PackagePlus className="size-4 text-[#2563eb]" />
                <h2 className="text-sm font-semibold text-[#0f172a]">Thêm sản phẩm mới</h2>
              </div>

              <form
                className="space-y-3"
                onSubmit={productForm.handleSubmit((values: ProductForm) => createProduct.mutate(values))}
              >
                <FormField label="Tên sản phẩm" error={productForm.formState.errors.name?.message} required>
                  <Input placeholder="Nhập tên sản phẩm" {...productForm.register('name')} />
                </FormField>

                <div className="grid grid-cols-2 gap-3">
                  <FormField label="Giá bán (VND)" error={productForm.formState.errors.price?.message} required>
                    <Input
                      type="number"
                      placeholder="0"
                      {...productForm.register('price', { valueAsNumber: true })}
                    />
                  </FormField>
                  <FormField label="Giá vốn (VND)" error={productForm.formState.errors.costPrice?.message}>
                    <Input
                      type="number"
                      placeholder="0"
                      {...productForm.register('costPrice', { valueAsNumber: true })}
                    />
                  </FormField>
                </div>

                <div className="rounded-lg bg-slate-50 p-2.5 text-[11px] text-[#64748b] border border-slate-200">
                  <span className="font-semibold text-[#2563eb]">Quy tắc kho:</span> Sản phẩm mới luôn tạo với tồn kho = 0. Tồn kho sẽ được ghi nhận khi lập Phiếu nhập hàng (UC_8.1).
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  size="md"
                  className="w-full"
                  isLoading={createProduct.isPending}
                >
                  Lưu sản phẩm
                </Button>
              </form>
            </section>
          )}
        </aside>
      </div>

      {/* Modal xác nhận thanh toán */}
      <ConfirmModal
        isOpen={isCheckoutConfirmOpen}
        title="Xác nhận thanh toán"
        description={`Xác nhận tạo đơn và thanh toán tổng số tiền ${money.format(
          cartTotal,
        )}? Hệ thống sẽ trừ tồn kho nguyên tử ngay khi hoàn tất.`}
        confirmLabel="Xác nhận thanh toán"
        cancelLabel="Kiểm tra lại"
        isLoading={createOrder.isPending}
        onConfirm={() => createOrder.mutate()}
        onCancel={() => setIsCheckoutConfirmOpen(false)}
      />

      {/* Hiển thị hóa đơn sau thanh toán */}
      {receipt && (
        <section
          id="receipt"
          className="mx-auto mt-8 max-w-xl rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-md"
        >
          <div className="mb-5 flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2563eb]">KinKin POS</p>
              <h2 className="text-xl font-bold text-[#0f172a]">Hóa đơn thanh toán</h2>
              <p className="text-xs text-[#64748b]">Mã: {receipt.code}</p>
            </div>
            <CheckCircle2 className="size-8 text-[#10b981]" />
          </div>

          <div className="space-y-2 border-y border-dashed border-[#e2e8f0] py-4 my-4">
            {receipt.items.map((item) => (
              <div key={`${item.productId}-${item.quantity}`} className="flex justify-between text-xs">
                <span>
                  {item.productName ?? productMap.get(item.productId)?.name ?? item.productId} × {item.quantity}
                </span>
                <span className="font-semibold">{money.format(item.unitPrice * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-base font-bold">
            <span>Tổng cộng:</span>
            <span className="text-[#2563eb]">{money.format(receipt.total)}</span>
          </div>

          <Button
            onClick={() => window.print()}
            variant="primary"
            size="md"
            className="no-print mt-5 w-full flex items-center justify-center gap-2"
          >
            <Printer className="size-4" /> In hóa đơn
          </Button>
        </section>
      )}

      {/* Toast Feedback */}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}
