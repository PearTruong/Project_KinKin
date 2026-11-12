'use client';

import React from 'react';

export interface BreadcrumbProps {
  items?: string[];
  currentTitle?: string;
}

export function Breadcrumb({
  items = ['Cửa hàng', 'Quản lý bán hàng', 'Tạo hóa đơn'],
}: BreadcrumbProps) {
  const currentTitle = items[items.length - 1] || 'KinKin POS';

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center min-w-0 font-['Inter',sans-serif]"
      data-node-id="1:4489"
    >
      {/* Rút gọn trên mobile (< 768px): Chỉ hiển thị trang hiện tại, không tràn chữ hoặc xuống dòng */}
      <span
        className="md:hidden text-[13px] font-semibold text-[#0f172a] truncate max-w-[110px] sm:max-w-[160px] whitespace-nowrap"
        title={currentTitle}
      >
        {currentTitle}
      </span>

      {/* Đầy đủ trên desktop khớp chính xác Figma frame 1:4489 (>= 768px) */}
      <div className="hidden md:flex items-center gap-[8px] text-[13px] whitespace-nowrap">
        {/* Icon Store / Home (Node 1:4490) */}
        <div className="relative shrink-0 size-[18px] flex items-center justify-center">
          <img
            alt="Trang chủ"
            className="size-full block"
            src="/assets/home.svg"
          />
        </div>

        {/* Breadcrumb segments */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <span
                className={
                  isLast
                    ? 'text-[#0f172a] font-medium'
                    : 'text-[#64748b] font-normal hover:text-[#0f172a] transition-colors'
                }
              >
                {item}
              </span>
              {!isLast && <span className="text-[#94a3b8] font-normal">/</span>}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
