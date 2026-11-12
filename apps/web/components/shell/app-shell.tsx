'use client';

import React, { useState } from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { MobileDrawer } from './mobile-drawer';
import { PasswordModal } from '@/components/accounts/password-modal';

export interface AppShellProps {
  currentPath?: string;
  breadcrumbItems?: string[];
  userName?: string;
  role?: string;
  onNavigate?: (path: string, breadcrumbItems?: string[]) => void;
  onLogout?: () => void;
  children: React.ReactNode;
}

export function AppShell({
  currentPath = '/orders',
  breadcrumbItems = ['Cửa hàng', 'Quản lý bán hàng', 'Tạo hóa đơn'],
  userName = 'Mai Linh',
  role = 'OWNER',
  onNavigate,
  onLogout,
  children,
}: AppShellProps) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [toastNotice, setToastNotice] = useState<string | null>(null);

  const handleOpenResetPassword = () => {
    setIsMobileDrawerOpen(false);
    setIsPasswordModalOpen(true);
  };

  return (
    <div
      className="flex h-screen w-screen overflow-hidden bg-[#f8fafc] text-[#0f172a] font-['Inter',sans-serif]"
      data-node-id={role === 'OWNER' ? '1:4458' : '1:4581'}
    >
      {/* Sidebar 224px cố định trên desktop khớp Figma frame 1:4459 / 1:4582 */}
      <Sidebar
        currentPath={currentPath}
        role={role}
        onNavigate={onNavigate}
        onLogout={onLogout}
        onPlaceholder={(label) => {
          setToastNotice(`${label}: Chức năng đang phát triển`);
          setTimeout(() => setToastNotice(null), 3000);
        }}
        onResetPassword={handleOpenResetPassword}
      />

      {/* Menu chính di động (Bảng 84, Hình 59 / Frame 1:4841) */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        currentPath={currentPath}
        userName={userName}
        role={role}
        onNavigate={onNavigate}
        onLogout={onLogout}
        onResetPassword={handleOpenResetPassword}
      />

      {/* Main Content Area (1216px trên viewport 1440px desktop) */}
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden bg-[#f8fafc]">
        {/* Header 72px khớp Figma frame 1:4488 / 1:4601 */}
        <Header
          breadcrumbItems={breadcrumbItems}
          userName={userName}
          role={role}
          onLogout={onLogout}
          onOpenMobileMenu={() => setIsMobileDrawerOpen(true)}
          onResetPassword={handleOpenResetPassword}
        />

        {/* Content Body: Nền #F8FAFC */}
        <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-[32px] lg:py-[24px]">
          {toastNotice && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg text-xs font-medium animate-in fade-in">
              {toastNotice}
            </div>
          )}
          <div className="max-w-[1152px] w-full mx-auto lg:mx-0">{children}</div>
        </main>
      </div>

      {/* Modal Đổi mật khẩu cá nhân / OWNER khớp Frame 1:310 và 1:1517 */}
      <PasswordModal
        isOpen={isPasswordModalOpen}
        isSelf={true}
        role={role}
        onClose={() => setIsPasswordModalOpen(false)}
        onSuccess={(msg) => {
          setIsPasswordModalOpen(false);
          setToastNotice(msg);
          setTimeout(() => setToastNotice(null), 4000);
        }}
      />

      {/* Toast thông báo */}
      {toastNotice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#0f172a] text-white text-sm font-medium rounded-xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{toastNotice}</span>
        </div>
      )}
    </div>
  );
}
