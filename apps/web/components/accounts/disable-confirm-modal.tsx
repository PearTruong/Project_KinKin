'use client';

import React, { useState } from 'react';
import { disableAccount, type AccountUser } from '@/lib/accounts-adapter';

export interface DisableConfirmModalProps {
  isOpen: boolean;
  user: AccountUser | null;
  onClose: () => void;
  onSuccess: (msg: string) => void;
  preview?: string | null;
}

export function DisableConfirmModal({
  isOpen,
  user,
  onClose,
  onSuccess,
  preview,
}: DisableConfirmModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen || !user) return null;

  const handleConfirm = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await disableAccount(user.id);
      onSuccess('Vô hiệu hóa tài khoản thành công.');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const isCancelHover = preview === 'cancel_hover';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Inter',sans-serif]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disable-modal-title"
      data-node-id={isCancelHover ? '1:2142' : '1:1798'}
      data-name={isCancelHover ? 'Vô hiệu hóa · Trước khi chọn Hủy bỏ' : '30 · Vô hiệu hóa · Xác nhận'}
    >
      {/* Backdrop mờ */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog (Khớp Frame 1:1798) */}
      <div className="relative z-10 w-full max-w-[460px] bg-white rounded-xl shadow-2xl border border-[#e2e8f0] p-6 text-left">
        <h3 id="disable-modal-title" className="text-base font-bold text-[#0f172a]">
          Vô hiệu hóa tài khoản?
        </h3>

        <div className="mt-3">
          <p className="text-[13px] font-bold text-[#0f172a]">
            {user.name} · {user.username}
          </p>
          <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
            Tài khoản sẽ không thể đăng nhập. Tất cả phiên đăng nhập của tài khoản này sẽ bị thu hồi sau khi vô hiệu hóa thành công.
          </p>
        </div>

        {error && (
          <div className="mt-3 p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs font-medium text-red-600">
            {error}
          </div>
        )}

        <div className="flex items-center justify-end gap-3 pt-5 mt-5">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className={`h-[38px] px-4 border rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              isCancelHover
                ? 'bg-[#f1f5f9] border-[#94a3b8] text-[#0f172a] ring-2 ring-slate-200'
                : 'border-[#e2e8f0] text-[#0f172a] hover:bg-[#f1f5f9]'
            }`}
          >
            Hủy bỏ
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={isLoading}
            className="h-[38px] px-5 bg-[#ef4444] hover:bg-red-600 active:bg-red-700 disabled:opacity-60 rounded-lg text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
          >
            {isLoading ? 'Đang xử lý...' : 'Vô hiệu hóa'}
          </button>
        </div>
      </div>
    </div>
  );
}
