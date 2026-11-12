'use client';

import React, { useState } from 'react';
import { getMenuForRole } from './menu-config';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath?: string;
  userName?: string;
  role?: string;
  onNavigate?: (path: string, breadcrumbItems?: string[]) => void;
  onLogout?: () => void;
  onResetPassword?: () => void;
}

/**
 * Menu chính di động (390px toàn trang) theo Figma Frame 1:4841 & Bảng 84 (Hình 59)
 * Gồm:
 * 1. Nhận diện cửa hàng (Logo, tên shop, nút đóng)
 * 2. Thẻ tài khoản đang đăng nhập (Nền sáng)
 * 3. Khối Không gian làm việc (Nền tối #0F172A, phân quyền theo role)
 * 4. Khối Tài khoản cá nhân (Nền sáng, Đặt lại mật khẩu & Đăng xuất)
 */
export function MobileDrawer({
  isOpen,
  onClose,
  currentPath = '/orders',
  userName = 'Mai Linh',
  role = 'OWNER',
  onNavigate,
  onLogout,
  onResetPassword,
}: MobileDrawerProps) {
  const menuItems = React.useMemo(() => getMenuForRole(role), [role]);

  // Nhóm đang mở trong menu accordion: Mặc định tất cả đóng giống Figma frame 1:4841
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Tính initials avatar (2 chữ cái)
  const initials = React.useMemo(() => {
    if (!userName.trim()) return role === 'OWNER' ? 'ML' : 'NA';
    const parts = userName.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [userName, role]);

  const roleLabel = role === 'OWNER' ? 'Chủ cửa hàng' : 'Nhân viên';

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col lg:hidden bg-[#f8fafc] text-[#0f172a] font-['Inter',sans-serif] overflow-y-auto"
      aria-modal="true"
      role="dialog"
      aria-label="Menu điều hướng di động"
      data-node-id="1:4841"
    >
      {/* 1. Nhận diện cửa hàng (Figma node 1:4842 / Bảng 84 STT 1) */}
      <div
        className="flex items-center justify-between px-5 pt-5 pb-4 bg-white border-b border-slate-200/80 shrink-0"
        data-node-id="1:4842"
      >
        <div className="flex items-center gap-3">
          <div className="relative shrink-0 size-[34px]">
            <img
              alt="KinKin POS Logo"
              className="size-full block"
              src="/assets/logo.svg"
            />
          </div>
          <div className="flex flex-col items-start leading-[1.3]">
            <h1 className="text-[19px] font-bold text-[#0f172a] tracking-tight">
              KinKin POS
            </h1>
            <p className="text-[11px] font-normal text-[#64748b]">
              Cửa hàng phụ kiện giày
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Đóng menu"
        >
          <img alt="Đóng" className="size-5" src="/assets/x.svg" />
        </button>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-4 max-w-[420px] w-full mx-auto">
        {/* 2. Thẻ tài khoản đang đăng nhập - Nền sáng (Figma node 1:4850 / Bảng 84 STT 2, 3, 4) */}
        <div
          className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3 shrink-0"
          data-node-id="1:4850"
        >
          <div
            className="size-[36px] rounded-full bg-[#2563eb] flex items-center justify-center text-white text-[13px] font-semibold shrink-0 shadow-sm"
            data-node-id="1:4851"
          >
            <span>{initials}</span>
          </div>
          <div className="flex flex-col items-start min-w-0" data-node-id="1:4853">
            <p className="text-[14px] font-semibold text-[#0f172a] truncate">
              {userName}
            </p>
            <p className="text-[12px] font-normal text-[#64748b]">
              {roleLabel}
            </p>
          </div>
        </div>

        {/* 3. Khối Không gian làm việc - Nền tối (Figma node 1:4856 / Bảng 84 STT 5–24) */}
        <div
          className="bg-[#0f172a] rounded-xl p-3.5 text-slate-300 shadow-sm flex flex-col shrink-0"
          data-node-id="1:4856"
        >
          <p
            className="px-2 mb-2 text-[10px] font-bold tracking-wider text-[#64748b] uppercase"
            data-node-id="1:4857"
          >
            Không gian làm việc
          </p>

          <nav className="flex flex-col gap-1" aria-label="Menu chức năng" data-node-id="1:4858">
            {menuItems.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isGroupOpen = Boolean(openGroups[item.key]);
              const isGroupActive =
                item.path === currentPath ||
                Boolean(item.children?.some((child) => child.path === currentPath));

              return (
                <div key={item.key} className="flex flex-col">
                  {/* Nhóm menu cha */}
                  <button
                    type="button"
                    onClick={() => {
                      if (hasChildren) {
                        toggleGroup(item.key);
                      } else if (item.path) {
                        onClose();
                        onNavigate?.(item.path, ['Cửa hàng', item.label]);
                      }
                    }}
                    className={`flex items-center justify-between w-full min-h-[40px] py-2 px-3 rounded-lg text-[13px] font-medium transition-colors cursor-pointer text-left ${
                      !hasChildren && isGroupActive
                        ? 'bg-[#2563eb] text-white shadow-xs'
                        : isGroupActive
                        ? 'text-white bg-[#1e293b]'
                        : 'text-[#94a3b8] hover:bg-[#1e293b] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      {item.iconSrc && (
                        <div className="relative shrink-0 size-[18px] flex items-center justify-center">
                          <img
                            alt=""
                            className="size-full block opacity-85"
                            src={item.iconSrc}
                          />
                        </div>
                      )}
                      <span className="leading-snug break-words whitespace-normal font-medium">
                        {item.label}
                      </span>
                    </div>

                    {hasChildren && (
                      <div className="relative shrink-0 size-[14px] text-[#64748b] flex items-center justify-center">
                        <img
                          alt=""
                          className={`size-full transition-transform duration-200 ${
                            isGroupOpen ? 'rotate-180' : ''
                          }`}
                          src="/assets/chevron-down.svg"
                        />
                      </div>
                    )}
                  </button>

                  {/* Submenu con (Lọc bỏ mục 'accounts-reset' vì đã có khối riêng ở dưới) */}
                  {hasChildren && isGroupOpen && (
                    <div className="flex flex-col gap-1 mt-1 pl-7 pr-1">
                      {item.children
                        ?.filter((child) => child.key !== 'accounts-reset')
                        .map((child) => {
                          const isChildActive = child.path === currentPath;
                          return (
                            <button
                              key={child.key}
                              type="button"
                              onClick={() => {
                                onClose();
                                if (child.path) {
                                  onNavigate?.(child.path, ['Cửa hàng', item.label, child.label]);
                                }
                              }}
                              className={`flex items-center w-full min-h-[34px] py-1.5 px-2.5 rounded-md text-[12px] transition-colors cursor-pointer text-left leading-snug ${
                                isChildActive
                                  ? 'bg-[#2563eb] text-white font-medium shadow-xs'
                                  : 'text-[#94a3b8] hover:bg-[#1e293b] hover:text-white font-normal'
                              }`}
                            >
                              <span className="break-words whitespace-normal">{child.label}</span>
                            </button>
                          );
                        })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* 4. Khối Tài khoản cá nhân - Nền sáng (Figma node 1:4871 / Bảng 84 STT 25–30) */}
        <div
          className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden divide-y divide-slate-100 shrink-0"
          data-node-id="1:4871"
        >
          {/* Mục Đặt lại mật khẩu (Bảng 84 STT 25, 26, 27) */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onResetPassword?.();
            }}
            className="flex items-center justify-between w-full h-[48px] px-4 text-[13px] font-medium text-[#0f172a] hover:bg-slate-50 transition-colors cursor-pointer text-left"
            data-node-id="1:4872"
          >
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="size-full block" src="/assets/key.svg" />
              </div>
              <span>Đặt lại mật khẩu</span>
            </div>
            <div className="relative shrink-0 size-[16px] text-slate-400">
              <img alt="" className="size-full" src="/assets/chevron-right.svg" />
            </div>
          </button>

          {/* Mục Đăng xuất (Bảng 84 STT 28, 29, 30) - Kết thúc phiên theo UC_10 */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onLogout?.();
            }}
            className="flex items-center justify-between w-full h-[48px] px-4 text-[13px] font-medium text-[#ef4444] hover:bg-red-50/50 transition-colors cursor-pointer text-left"
            data-node-id="1:4878"
          >
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 size-[18px]">
                <img alt="Đăng xuất" className="size-full block" src="/assets/logout.svg" />
              </div>
              <span>Đăng xuất</span>
            </div>
            <div className="relative shrink-0 size-[16px] text-red-400">
              <img alt="" className="size-full" src="/assets/chevron-right.svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
