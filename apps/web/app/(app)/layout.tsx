'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AppShell } from '@/components/shell/app-shell';
import { ToastContainer, type ToastMessage } from '@/components/ui/toast';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('OWNER');
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error' | 'info', message: string) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('kinkin-token');
    if (!savedToken) {
      router.replace('/login');
    } else {
      setToken(savedToken);
      setUserName(localStorage.getItem('kinkin-user') ?? '');
      setUserRole(localStorage.getItem('kinkin-role') ?? 'OWNER');
      setIsCheckingAuth(false);
    }
  }, [router]);

  const handleLogout = () => {
    try {
      localStorage.removeItem('kinkin-token');
      localStorage.removeItem('kinkin-user');
      localStorage.removeItem('kinkin-role');
      router.replace('/login');
    } catch {
      addToast('error', 'Không thể đăng xuất do lỗi hệ thống. Vui lòng thử lại.');
    }
  };

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  // Generate breadcrumb items according to current pathname
  const getBreadcrumbs = () => {
    if (pathname.startsWith('/sales') || pathname === '/' || pathname === '/orders') {
      return ['Cửa hàng', 'Quản lý bán hàng', 'Tạo hóa đơn'];
    }
    if (pathname.startsWith('/catalog/categories')) {
      return ['Cửa hàng', 'Quản lý danh mục', 'Danh mục'];
    }
    if (pathname.startsWith('/catalog')) {
      return ['Cửa hàng', 'Danh mục & Sản phẩm', 'Tra cứu sản phẩm'];
    }
    if (pathname.startsWith('/inventory')) {
      return ['Cửa hàng', 'Quản lý tồn kho', 'Tra cứu tồn kho'];
    }
    if (pathname.startsWith('/purchases')) {
      return ['Cửa hàng', 'Quản lý nhập hàng', 'Phiếu nhập hàng'];
    }
    if (pathname === '/accounts/new') {
      return ['Cửa hàng', 'Quản lý tài khoản', 'Tạo tài khoản mới'];
    }
    if (pathname === '/accounts/edit') {
      return ['Cửa hàng', 'Quản lý tài khoản', 'Sửa thông tin tài khoản'];
    }
    if (pathname === '/accounts/disable') {
      return ['Cửa hàng', 'Quản lý tài khoản', 'Vô hiệu hóa tài khoản'];
    }
    if (pathname === '/accounts/password') {
      return ['Cửa hàng', 'Đặt lại mật khẩu'];
    }
    if (pathname.startsWith('/accounts')) {
      return ['Cửa hàng', 'Quản lý tài khoản'];
    }
    if (pathname.startsWith('/reports')) {
      return ['Cửa hàng', 'Báo cáo thống kê', 'Báo cáo doanh thu'];
    }
    return ['Cửa hàng', 'Tổng quan'];
  };

  return (
    <>
      <AppShell
        currentPath={pathname === '/' ? '/orders' : pathname}
        breadcrumbItems={getBreadcrumbs()}
        userName={userName || (userRole === 'OWNER' ? 'Mai Linh' : 'Nguyễn Minh Anh')}
        role={userRole}
        onNavigate={(path) => {
          if (path === '/orders' || path === '/') {
            router.push('/');
          } else if (path.startsWith('/accounts') || path.startsWith('/catalog/categories')) {
            router.push(path);
          } else {
            // Hiển thị thông báo roadmap cho các route chưa xây dựng
            addToast('info', 'Chức năng đang phát triển theo lộ trình MVP 10 ngày.');
            router.push(path);
          }
        }}
        onLogout={handleLogout}
      >
        {children}
      </AppShell>
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </>
  );
}
