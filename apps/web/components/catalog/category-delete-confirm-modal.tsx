import React from 'react';
import { Category } from '@/lib/categories-adapter';

export interface CategoryDeleteConfirmModalProps {
  isOpen: boolean;
  category: Category | null;
  onClose: () => void;
  onConfirm: (category: Category) => Promise<void> | void;
  isSubmitting?: boolean;
  dataNodeId?: string;
}

export function CategoryDeleteConfirmModal({
  isOpen,
  category,
  onClose,
  onConfirm,
  isSubmitting = false,
  dataNodeId = '1:32102',
}: CategoryDeleteConfirmModalProps) {
  if (!isOpen || !category) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.32)] p-4"
      data-node-id="1:32101"
      data-name="Lớp phủ xác nhận xoá"
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-delete-title"
    >
      <div
        className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shadow-[0px_16px_48px_0px_rgba(15,23,42,0.16)] w-full max-w-[560px]"
        data-node-id={dataNodeId}
        data-name="Xác nhận xoá nhóm hàng"
      >
        <h2
          id="category-delete-title"
          className="font-bold leading-[30px] text-[#0f172a] text-[20px]"
          data-node-id="1:32103"
        >
          Xoá danh mục
        </h2>

        <p
          className="font-normal leading-[22px] text-[#0f172a] text-[14px]"
          data-node-id="1:32104"
        >
          {`Bạn có chắc chắn muốn xoá danh mục '${category.name}'? Hành động này không thể hoàn tác.`}
        </p>

        <div
          className="flex gap-[12px] h-[40px] items-center justify-end w-full"
          data-node-id="1:32105"
          data-name="Thao tác hộp thoại xoá"
        >
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="bg-white border border-[#e2e8f0] h-[40px] px-5 rounded-[8px] font-semibold text-[#0f172a] text-[13px] hover:bg-[#f8fafc] transition-colors focus:outline-none"
            data-node-id="1:32106"
            data-name="Hủy"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={() => onConfirm(category)}
            disabled={isSubmitting}
            className="bg-[#dc2626] h-[40px] px-6 rounded-[8px] font-semibold text-white text-[13px] hover:bg-[#b91c1c] transition-colors focus:outline-none disabled:opacity-50"
            data-node-id="1:32108"
            data-name="Xác nhận"
          >
            {isSubmitting ? 'Đang xóa...' : 'Xác nhận'}
          </button>
        </div>
      </div>
    </div>
  );
}
