'use client';

import React, { useState, useRef, useEffect } from 'react';

export interface UserMenuProps {
  userName?: string;
  role?: string;
  onLogout?: () => void;
  onResetPassword?: () => void;
}

export function UserMenu({
  userName = 'Chủ cửa hàng demo',
  role = 'OWNER',
  onLogout,
  onResetPassword,
}: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Tính toán Avatar Initials (2 chữ cái)
  const initials = React.useMemo(() => {
    if (!userName.trim()) return role === 'OWNER' ? 'AD' : 'NV';
    const parts = userName.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [userName, role]);

  const roleLabel = role === 'OWNER' ? 'Chủ cửa hàng' : 'Nhân viên';

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative flex items-center gap-[12px] sm:gap-[16px] font-['Inter',sans-serif]"
      data-node-id="1:4495"
      data-name="UserWidget"
    >
      {/* Đường phân cách dọc 1px cao 28px (Node 1:4496) */}
      <div className="w-[1px] h-[28px] bg-[#e2e8f0] shrink-0" />

      {/* Thông tin người dùng có thể click (Node 1:4497) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[8px] sm:gap-[10px] p-1 rounded-lg hover:bg-[#f1f5f9] transition-colors focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Avatar tròn 34x34 (Node 1:4498) */}
        <div
          className="size-[34px] rounded-full bg-[#2563eb] flex items-center justify-center text-white text-[13px] font-semibold shrink-0 shadow-sm"
          data-node-id="1:4498"
        >
          <span data-node-id="1:4499">{initials}</span>
        </div>

        {/* Tên và Vai trò (Node 1:4500) */}
        <div className="flex flex-col items-start text-left shrink-0">
          <p
            className="text-[13px] font-medium leading-[18px] text-[#0f172a] truncate max-w-[100px] sm:max-w-[140px]"
            data-node-id="1:4501"
          >
            {userName}
          </p>
          <p
            className="text-[11px] font-normal leading-[15px] text-[#64748b]"
            data-node-id="1:4502"
          >
            {roleLabel}
          </p>
        </div>

        {/* Chevron icon 14x14 (Node 1:4503) */}
        <div className="relative size-[14px] shrink-0 text-[#64748b]">
          <img
            alt=""
            className={`size-full transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            src="/assets/chevron-down.svg"
          />
        </div>
      </button>

      {/* Dropdown Menu (Figma frame 1:4286 đăng xuất) */}
      {isOpen && (
        <div className="absolute right-0 top-[48px] w-[200px] bg-white border border-[#e2e8f0] rounded-xl shadow-lg py-2 z-50 animate-in fade-in duration-150">
          <div className="px-4 py-2 border-b border-[#e2e8f0]">
            <p className="text-xs font-semibold text-[#0f172a] truncate">{userName}</p>
            <p className="text-[11px] text-[#64748b]">{roleLabel}</p>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onResetPassword?.();
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-[#0f172a] hover:bg-[#f1f5f9] transition-colors cursor-pointer"
          >
            <img alt="" className="size-4" src="/assets/key.svg" />
            <span>Đặt lại mật khẩu</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onLogout?.();
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-[#ef4444] hover:bg-red-50 transition-colors cursor-pointer"
          >
            <img alt="" className="size-4" src="/assets/logout.svg" />
            <span>Đăng xuất</span>
          </button>
        </div>
      )}
    </div>
  );
}
