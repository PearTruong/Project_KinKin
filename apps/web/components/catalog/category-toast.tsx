import React from 'react';
import { CategoryNotification } from './category-types';

export interface CategoryToastProps {
  notification: CategoryNotification | null;
  onClose?: () => void;
  className?: string;
  dataNodeId?: string;
}

export function CategoryToast({
  notification,
  onClose,
  className = '',
  dataNodeId,
}: CategoryToastProps) {
  if (!notification) return null;

  const { type, message } = notification;

  if (type === 'success') {
    return (
      <div
        className={`bg-[#dcfce7] border border-[#bbf7d0] content-stretch flex gap-[12px] items-start p-[16px] rounded-[8px] w-full sm:w-[448px] shadow-md ${className}`}
        data-node-id={dataNodeId || '1:31903'}
        data-name="Thông báo thành công"
        role="alert"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]"
          data-name="Biểu tượng thông báo"
        >
          <span className="font-semibold leading-[20px] text-[#15803d] text-[18px]">
            ✓
          </span>
        </div>
        <p className="flex-[1_0_0] font-medium leading-[20px] text-[#15803d] text-[13px] [word-break:break-word]">
          {message}
        </p>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-[#15803d] hover:opacity-70 text-sm font-bold ml-1 focus:outline-none"
            aria-label="Đóng"
          >
            ×
          </button>
        )}
      </div>
    );
  }

  if (type === 'info') {
    return (
      <div
        className={`bg-[#eff6ff] border border-[#bfdbfe] content-stretch flex gap-[12px] items-start p-[16px] rounded-[8px] w-full sm:w-[448px] shadow-md ${className}`}
        data-node-id={dataNodeId || '1:33273'}
        data-name="Thông báo thông tin"
        role="status"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]"
          data-name="Biểu tượng thông báo"
        >
          <span className="font-semibold leading-[20px] text-[#2563eb] text-[18px]">
            i
          </span>
        </div>
        <p className="flex-[1_0_0] font-medium leading-[20px] text-[#2563eb] text-[13px] [word-break:break-word]">
          {message}
        </p>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-[#2563eb] hover:opacity-70 text-sm font-bold ml-1 focus:outline-none"
            aria-label="Đóng"
          >
            ×
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`bg-[#fef2f2] border border-[#fecaca] content-stretch flex gap-[12px] items-start p-[16px] rounded-[8px] w-full sm:w-[448px] shadow-md ${className}`}
      data-node-id={dataNodeId || '1:31692'}
      data-name="Thông báo lỗi"
      role="alert"
    >
      <div
        className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]"
        data-name="Biểu tượng thông báo"
      >
        <span className="font-semibold leading-[20px] text-[#dc2626] text-[18px]">
          !
        </span>
      </div>
      <p className="flex-[1_0_0] font-medium leading-[20px] text-[#b91c1c] text-[13px] [word-break:break-word]">
        {message}
      </p>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-[#b91c1c] hover:opacity-70 text-sm font-bold ml-1 focus:outline-none"
          aria-label="Đóng"
        >
          ×
        </button>
      )}
    </div>
  );
}
