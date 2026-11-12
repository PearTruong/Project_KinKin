import React, { useState, useEffect } from 'react';

export interface CategoryAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => Promise<void> | void;
  initialValue?: string;
  forcedError?: string;
  isSubmitting?: boolean;
  dataNodeId?: string;
}

export function CategoryAddModal({
  isOpen,
  onClose,
  onSubmit,
  initialValue = '',
  forcedError,
  isSubmitting = false,
  dataNodeId = '1:31064',
}: CategoryAddModalProps) {
  const [name, setName] = useState(initialValue);
  const [error, setError] = useState<string | null>(forcedError ?? null);

  useEffect(() => {
    if (isOpen) {
      setName(initialValue);
      setError(forcedError ?? null);
    }
  }, [isOpen, initialValue, forcedError]);

  if (!isOpen) return null;

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
      await onSubmit(trimmed);
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
      data-node-id="1:31063"
      data-name="Lớp phủ modal thêm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-add-title"
    >
      <div
        className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] shadow-[0px_16px_48px_0px_rgba(15,23,42,0.16)] w-full max-w-[560px]"
        data-node-id={dataNodeId}
        data-name="Thêm nhóm hàng"
      >
        <h2
          id="category-add-title"
          className="font-bold leading-[30px] text-[#0f172a] text-[20px]"
          data-node-id="1:31065"
        >
          Thêm danh mục
        </h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[24px]">
          <div
            className="flex flex-col gap-[8px] items-start w-full"
            data-node-id="1:31066"
            data-name="Trường tên nhóm hàng"
          >
            <label
              htmlFor="add-category-name"
              className="font-medium text-[#0f172a] text-[12px] leading-[20px]"
              data-node-id="1:31067"
            >
              <span>{`Tên danh mục `}</span>
              <span className="text-[#dc2626]">*</span>
            </label>

            <div
              className={`bg-white border ${
                hasError ? 'border-[#dc2626]' : 'border-[#e2e8f0]'
              } content-stretch flex h-[44px] items-center px-[12px] rounded-[8px] w-full transition-colors focus-within:border-[#2563eb]`}
              data-node-id="1:31068"
              data-name="Ô nhập tên · Tối đa 100 ký tự"
            >
              <input
                id="add-category-name"
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
                data-node-id="1:31275"
                data-name="Lỗi kiểm tra tên"
              >
                {error}
              </p>
            )}
          </div>

          <div
            className="flex gap-[12px] h-[40px] items-center justify-end w-full"
            data-node-id="1:31070"
            data-name="Thao tác thêm nhóm hàng"
          >
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="bg-white border border-[#e2e8f0] h-[40px] px-5 rounded-[8px] font-semibold text-[#0f172a] text-[13px] hover:bg-[#f8fafc] transition-colors focus:outline-none"
              data-node-id="1:31071"
              data-name="Hủy"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2563eb] h-[40px] px-6 rounded-[8px] font-semibold text-white text-[13px] hover:bg-[#1d4ed8] transition-colors focus:outline-none disabled:opacity-50"
              data-node-id="1:31073"
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
