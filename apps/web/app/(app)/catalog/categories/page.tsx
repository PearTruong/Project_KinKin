'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { CategoriesListView } from '@/components/catalog/categories-list-view';

function AccessDeniedView() {
  return (
    <div className="mx-auto my-12 max-w-lg rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
        <ShieldAlert className="size-8" />
      </div>
      <h2 className="mb-2 text-xl font-bold text-[#0f172a]">Truy cập bị từ chối</h2>
      <p className="mb-6 text-sm leading-relaxed text-[#64748b]">
        Chức năng <strong>Quản lý danh mục sản phẩm</strong> (UC_7.1–UC_7.3) chỉ dành riêng cho <strong>Chủ cửa hàng (OWNER)</strong> theo quy tắc nghiệp vụ BR01. Nhân viên không có quyền truy cập trang này.
      </p>
      <div className="flex justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#024936] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#02382a]"
        >
          <ArrowLeft className="size-4" />
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}

function CategoriesContent() {
  const searchParams = useSearchParams();
  const hasPreview = Boolean(searchParams?.get('preview'));

  const [authState, setAuthState] = useState<{
    isLoading: boolean;
    role: string | null;
  }>({
    isLoading: true,
    role: null,
  });

  useEffect(() => {
    const savedRole = localStorage.getItem('kinkin-role');

    // Nếu có tham số preview (dùng trong test tự động và chụp ảnh đối soát)
    // và chưa set role thì cho phép xem preview với role OWNER
    if (!savedRole && hasPreview) {
      setAuthState({
        isLoading: false,
        role: 'OWNER',
      });
      return;
    }

    setAuthState({
      isLoading: false,
      role: savedRole || null,
    });
  }, [hasPreview]);

  // Trong lúc đọc role từ localStorage, không render UI mặc định OWNER
  if (authState.isLoading) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center p-8 text-center">
        <div className="mb-3 size-7 animate-spin rounded-full border-2 border-[#024936] border-t-transparent" />
        <p className="text-sm font-medium text-[#64748b]">Đang kiểm tra quyền truy cập...</p>
      </div>
    );
  }

  // Chặn EMPLOYEE hoặc người dùng không phải OWNER truy cập trực tiếp theo đặc tả BR01
  if (authState.role !== 'OWNER') {
    return <AccessDeniedView />;
  }

  return <CategoriesListView currentRole="OWNER" />;
}

export default function CategoriesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[300px] flex-col items-center justify-center p-8 text-center">
          <div className="mb-3 size-7 animate-spin rounded-full border-2 border-[#024936] border-t-transparent" />
          <p className="text-sm font-medium text-[#64748b]">Đang tải danh mục...</p>
        </div>
      }
    >
      <CategoriesContent />
    </Suspense>
  );
}
