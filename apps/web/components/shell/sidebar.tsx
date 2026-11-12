'use client';

import React, { useState } from 'react';
import { getMenuForRole, type MenuItem } from './menu-config';

export interface SidebarProps {
  currentPath?: string;
  role?: string;
  onNavigate?: (path: string, breadcrumbItems?: string[]) => void;
  onLogout?: () => void;
  onPlaceholder?: (label?: string) => void;
  onResetPassword?: () => void;
}

export function Sidebar({
  currentPath = '/orders',
  role = 'OWNER',
  onNavigate,
  onLogout,
  onPlaceholder,
  onResetPassword,
}: SidebarProps) {
  // Lấy menu đã được lọc chặt chẽ từ role (không dùng CSS ẩn)
  const menuItems = React.useMemo(() => getMenuForRole(role), [role]);

  // Nhóm đang mở: Mở nhóm chứa currentPath
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    sales: currentPath.startsWith('/orders') || currentPath.startsWith('/sales'),
    inventory: currentPath.startsWith('/inventory'),
    returns: currentPath.startsWith('/returns'),
    accounts: currentPath.startsWith('/accounts'),
    catalog: currentPath.startsWith('/catalog'),
    purchases: currentPath.startsWith('/purchases'),
    reports: currentPath.startsWith('/reports'),
  });

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <aside
      className="hidden lg:flex w-[224px] min-h-screen h-full bg-[#0f172a] text-slate-300 flex-col justify-between shrink-0 select-none font-['Inter',sans-serif]"
      data-node-id="1:4459"
      data-name="Sidebar"
    >
      {/* Vùng trên: Header Logo & Danh sách Menu */}
      <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
        {/* Brand Header: Logo 34x34 & Tên cửa hàng (Node 1:4460 / 1:4583) */}
        <div
          className="flex items-center gap-[10px] px-[16px] pt-[20px] pb-[16px] shrink-0"
          data-node-id="1:4460"
        >
          <div className="relative shrink-0 size-[34px]" data-node-id="1:4462">
            <img
              alt="KinKin POS Logo"
              className="absolute block inset-0 max-w-none size-full"
              src="/assets/logo.svg"
            />
          </div>
          <div className="flex flex-col items-start leading-[1.3] whitespace-nowrap overflow-hidden">
            <h1
              className="text-[20px] font-bold text-white tracking-tight"
              data-node-id="1:4465"
            >
              KinKin POS
            </h1>
            <p
              className="text-[10px] font-normal text-[#94a3b8]"
              data-node-id="1:4466"
            >
              Cửa hàng phụ kiện giày
            </p>
          </div>
        </div>

        {/* Navigation Menu Section (Node 1:4467 / 1:4590) */}
        <div className="px-[12px] py-[12px] flex-1">
          {/* Tiêu đề Section (Node 1:4468 / 1:4591) */}
          <p className="px-[12px] mb-[10px] text-[10px] font-bold tracking-wider text-[#64748b] uppercase">
            Không gian làm việc
          </p>

          <nav className="flex flex-col gap-[4px]" aria-label="Menu chính">
            {menuItems.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isGroupOpen = Boolean(openGroups[item.key]);
              const isGroupActive =
                item.path === currentPath ||
                Boolean(item.children?.some((child) => child.path === currentPath));

              return (
                <div key={item.key} className="flex flex-col">
                  {/* Menu cha */}
                  <button
                    type="button"
                    onClick={() => {
                      if (hasChildren) {
                        toggleGroup(item.key);
                        if (item.path) {
                          onNavigate?.(item.path, ['Cửa hàng', item.label]);
                        }
                      } else if (item.path) {
                        onNavigate?.(item.path, ['Cửa hàng', item.label]);
                      }
                    }}
                    className={`flex items-center justify-between w-full min-h-[34px] py-[5px] px-[8px] rounded-[6px] transition-colors cursor-pointer text-left ${
                      !hasChildren && isGroupActive
                        ? 'bg-[#2563eb] text-white shadow-xs'
                        : isGroupActive
                        ? 'text-white bg-[#1e293b]'
                        : 'text-[#94a3b8] hover:bg-[#1e293b] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-[8px] min-w-0">
                      {item.iconSrc && (
                        <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                          <img
                            alt=""
                            className="size-full block opacity-85"
                            src={item.iconSrc}
                          />
                        </div>
                      )}
                      <span className="text-[12px] font-medium tracking-tight leading-tight break-words whitespace-normal">{item.label}</span>
                    </div>

                    {hasChildren && (
                      <div className="relative shrink-0 size-[13px] text-[#64748b] flex items-center justify-center">
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

                  {/* Submenu con (nếu nhóm đang mở) */}
                  {hasChildren && isGroupOpen && (
                    <div className="flex flex-col gap-[2px] mt-[1px] pl-[24px] pr-[4px]">
                      {item.children?.map((child) => {
                        const isChildActive = child.path === currentPath;
                        return (
                          <button
                            key={child.key}
                            type="button"
                            onClick={() => {
                              if (child.isAction || child.key === 'accounts-reset') {
                                onResetPassword?.();
                              } else if (child.isPlaceholder || !child.path) {
                                onPlaceholder?.(child.label);
                              } else {
                                onNavigate?.(child.path, ['Cửa hàng', item.label, child.label]);
                              }
                            }}
                            className={`flex items-center w-full min-h-[28px] py-[3px] px-[8px] rounded-[5px] transition-colors cursor-pointer text-left ${
                              isChildActive
                                ? 'bg-white text-[#0f172a] font-semibold shadow-xs'
                                : 'text-[#94a3b8] hover:bg-[#1e293b] hover:text-white font-normal'
                            }`}
                          >
                            <span className="text-[11.5px] leading-tight break-words whitespace-normal">{child.label}</span>
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
      </div>

      {/* Vùng dưới: Nút Đăng xuất (Node 1:4481 / 1:4594) */}
      <div
        className="px-[12px] py-[12px] border-t border-slate-800 shrink-0"
        data-node-id="1:4481"
      >
        <button
          type="button"
          onClick={onLogout}
          className="flex items-center gap-[10px] w-full h-[38px] px-[12px] rounded-[8px] text-[13px] font-medium text-[#ef4444] hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer"
          data-node-id="1:4483"
        >
          <div className="relative shrink-0 size-[18px]">
            <img
              alt="Đăng xuất"
              className="size-full block"
              src="/assets/logout.svg"
            />
          </div>
          <span data-node-id="1:4486">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}
