import React from 'react';

export interface CategoryWarningBannerProps {
  categoryName?: string;
  productCount?: number;
  customMessage?: string;
  onClose?: () => void;
  dataNodeId?: string;
}

export function CategoryWarningBanner({
  categoryName = '[Tên danh mục]',
  productCount,
  customMessage,
  onClose,
  dataNodeId = '1:32167',
}: CategoryWarningBannerProps) {
  const displayCount = productCount !== undefined ? String(productCount) : '[X]';
  const message =
    customMessage ??
    `Không thể xoá! danh mục '${categoryName}' đang có ${displayCount} sản phẩm. Vui lòng chuyển hoặc xoá hết sản phẩm trước.`;

  return (
    <div
      className="bg-[#fef3c7] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] rounded-[8px] w-full mb-4 shadow-sm"
      data-node-id={dataNodeId}
      data-name="Thông báo lỗi xoá danh mục"
      role="alert"
    >
      <div
        className="bg-[#fde68a] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]"
        data-name="Biểu tượng cảnh báo"
      >
        <span className="font-semibold leading-[16px] text-[#92400e] text-[16px]">
          !
        </span>
      </div>
      <p
        className="flex-[1_0_0] font-medium leading-[20px] text-[#92400e] text-[13px] [word-break:break-word]"
        data-name="Thông báo ràng buộc sản phẩm"
      >
        {message}
      </p>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-[#92400e] hover:opacity-70 text-sm font-bold ml-2 focus:outline-none"
          aria-label="Đóng cảnh báo"
        >
          ×
        </button>
      )}
    </div>
  );
}
