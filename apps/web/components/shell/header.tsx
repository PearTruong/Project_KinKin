'use client';

import React from 'react';
import { Breadcrumb } from './breadcrumb';
import { UserMenu } from './user-menu';

export interface HeaderProps {
  breadcrumbItems?: string[];
  userName?: string;
  role?: string;
  onLogout?: () => void;
  onOpenMobileMenu?: () => void;
  onResetPassword?: () => void;
}

export function Header({
  breadcrumbItems = ['Cửa hàng', 'Quản lý bán hàng', 'Tạo hóa đơn'],
  userName = 'Người dùng',
  role = 'OWNER',
  onLogout,
  onOpenMobileMenu,
  onResetPassword,
}: HeaderProps) {
  return (
    <header
      className="flex items-center justify-between h-[72px] px-3.5 sm:px-6 lg:px-[32px] bg-white border-b border-[#e2e8f0] shrink-0 w-full"
      data-node-id="1:4488"
      data-name="Header"
    >
      {/* Vùng bên trái: Nút Hamburger trên mobile & Breadcrumb trên desktop */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {/* Nút Hamburger menu trên Mobile */}
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 -ml-1 text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg transition-colors focus:outline-none shrink-0"
          aria-label="Mở menu điều hướng"
        >
          <img alt="Menu" className="size-5" src="/assets/menu.svg" />
        </button>

        {/* Breadcrumb (Node 1:4489 / 1:4602) */}
        <div className="min-w-0">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* User profile widget bên phải (Node 1:4495 / 1:4608) */}
      <div className="shrink-0">
        <UserMenu
          userName={userName}
          role={role}
          onLogout={onLogout}
          onResetPassword={onResetPassword}
        />
      </div>
    </header>
  );
}
