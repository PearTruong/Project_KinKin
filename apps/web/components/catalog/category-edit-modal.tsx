import React, { useState, useEffect } from 'react';
import { Category } from '@/lib/categories-adapter';

export interface CategoryEditModalProps {
  isOpen: boolean;
  category: Category | null;
  onClose: () => void;
  onSubmit: (id: string, name: string) => Promise<void> | void;
  forcedName?: string;
  forcedError?: string;
  isSubmitting?: boolean;
  dataNodeId?: string;
}

export function CategoryEditModal({
  isOpen,
  category,
  onClose,
  onSubmit,
  forcedName,
  forcedError,
  isSubmitting = false,
  dataNodeId = '1:33065',
}: CategoryEditModalProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(forcedError ?? null);

  useEffect(() => {
    if (isOpen && category) {
      setName(forcedName !== undefined ? forcedName : category.name);
      setError(forcedError ?? null);
    }
  }, [isOpen, category, forcedName, forcedError]);

  if (!isOpen || !category) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Tên danh mục không được để trống');
      return;
    }
    if (trimmed.length > 100) {
      setError('Tên danh mục không được vượt quá 100 ký tự');
      return;
    }
    setError(null);
    try {
      await onSubmit(category.id, trimmed);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Có lỗi xảy ra, vui lòng thử lại.');
      }
    }
  };

  const hasError = Boolean(error);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.32)] p-4"
      data-node-id="1:33064"
      data-name="Lớp phủ modal sửa"
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-edit-title"
    >
      <div
        className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shadow-[0px_16px_48px_0px_rgba(15,23,42,0.16)] w-full max-w-[560px]"
        data-node-id={dataNodeId}
        data-name="Sửa nhóm hàng"
      >
        <h2
          id="category-edit-title"
          className="font-bold leading-[30px] text-[#0f172a] text-[20px]"
          data-node-id="1:33066"
        >
          Sửa danh mục
        </h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[24px]">
          {/* Mã danh mục - chỉ đọc */}
          <div
            className="flex flex-col gap-[8px] items-start w-full"
            data-node-id="1:33067"
            data-name="Mã nhóm hàng · Read-only"
          >
            <label
              className="font-medium text-[#0f172a] text-[12px] leading-[20px]"
              data-node-id="1:33068"
            >
              Mã danh mục
            </label>
            <div
              className="bg-[#f8fafc] border border-[#e2e8f0] flex h-[44px] items-center px-[12px] rounded-[8px] w-full"
              data-node-id="1:33069"
              data-name="Mã nhóm hàng không chỉnh sửa"
            >
              <p
                className="font-normal leading-[20px] text-[#64748b] text-[13px]"
                data-node-id="1:33070"
              >
                {category.code}
              </p>
            </div>
          </div>

          {/* Tên danh mục */}
          <div
            className="flex flex-col gap-[8px] items-start w-full"
            data-node-id="1:33071"
            data-name="Trường tên nhóm hàng"
          >
            <label
              htmlFor="edit-category-name"
              className="font-medium text-[#0f172a] text-[12px] leading-[20px]"
              data-node-id="1:33072"
            >
              <span>{`Tên danh mục `}</span>
              <span className="text-[#dc2626]">*</span>
            </label>

            <div
              className={`bg-white border ${
                hasError ? 'border-[#dc2626]' : 'border-[#e2e8f0]'
              } content-stretch flex h-[44px] items-center px-[12px] rounded-[8px] w-full transition-colors focus-within:border-[#2563eb]`}
              data-node-id="1:33073"
              data-name="Ô nhập tên · Tối đa 100 ký tự"
            >
              <input
                id="edit-category-name"
                type="text"
                maxLength={100}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError(null);
                }}
                disabled={isSubmitting}
                className="w-full text-[#0f172a] text-[13px] font-normal leading-[20px] bg-transparent outline-none placeholder:text-[#64748b]"
                placeholder="Nhập tên danh mục..."
                autoFocus
              />
            </div>

            {hasError && (
              <p
                className="font-normal leading-[20px] text-[#dc2626] text-[12px]"
                data-node-id="1:33481"
                data-name="Lỗi kiểm tra tên"
              >
                {error}
              </p>
            )}
          </div>

          {/* Actions */}
          <div
            className="flex gap-[12px] h-[40px] items-center justify-end w-full"
            data-node-id="1:33075"
            data-name="Thao tác sửa nhóm hàng"
          >
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="bg-white border border-[#e2e8f0] h-[40px] px-5 rounded-[8px] font-semibold text-[#0f172a] text-[13px] hover:bg-[#f8fafc] transition-colors focus:outline-none"
              data-node-id="1:33076"
              data-name="Hủy"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2563eb] h-[40px] px-6 rounded-[8px] font-semibold text-white text-[13px] hover:bg-[#1d4ed8] transition-colors focus:outline-none disabled:opacity-50"
              data-node-id="1:33078"
              data-name="Lưu"
            >
              {isSubmitting ? 'Đang lưu...' : 'Lưu'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
