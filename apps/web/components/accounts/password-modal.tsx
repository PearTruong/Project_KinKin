'use client';

import React, { useState, useEffect } from 'react';
import { changePassword } from '@/lib/accounts-adapter';

export interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUser?: { id: string; name: string; username: string };
  isSelf?: boolean;
  role?: 'OWNER' | 'EMPLOYEE' | string;
  previewState?:
    | 'valid_filled'
    | 'empty'
    | 'wrong_old'
    | 'mismatch'
    | 'short_pass'
    | 'whitespace_pass'
    | 'same_as_old'
    | 'save_error'
    | 'cancel';
  onSuccess?: (msg: string) => void;
}

export function PasswordModal({
  isOpen,
  onClose,
  targetUser,
  isSelf = true,
  role = 'EMPLOYEE',
  previewState,
  onSuccess,
}: PasswordModalProps) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Set preview simulation states if prop is provided
  useEffect(() => {
    if (previewState === 'valid_filled') {
      // Node 1:422: 34 · Đổi mật khẩu · Đã nhập
      setOldPassword('12345678');
      setNewPassword('P@sswordNew88');
      setConfirmPassword('P@sswordNew88');
      setErrors({});
    } else if (previewState === 'empty') {
      // Node 1:534: 35 · Đổi mật khẩu · Thiếu thông tin
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setErrors({ form: 'Vui lòng điền đầy đủ các thông tin bắt buộc.' });
    } else if (previewState === 'wrong_old') {
      // Node 1:649: Mật khẩu hiện tại sai
      setOldPassword('wrongpass123');
      setNewPassword('P@sswordNew88');
      setConfirmPassword('P@sswordNew88');
      setErrors({ oldPassword: 'Mật khẩu hiện tại không đúng, vui lòng nhập lại.' });
    } else if (previewState === 'mismatch') {
      // Node 1:761: Xác nhận không khớp
      setOldPassword('12345678');
      setNewPassword('P@sswordNew88');
      setConfirmPassword('P@sswordDiff99');
      setErrors({ confirmPassword: 'Mật khẩu mới không trùng khớp, vui lòng nhập lại.' });
    } else if (previewState === 'short_pass') {
      // Node 1:872: Mật khẩu mới quá ngắn
      setOldPassword('12345678');
      setNewPassword('123456');
      setConfirmPassword('123456');
      setErrors({ newPassword: 'Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.' });
    } else if (previewState === 'whitespace_pass') {
      // Node 1:982: Mật khẩu mới chỉ gồm khoảng trắng
      setOldPassword('12345678');
      setNewPassword('        ');
      setConfirmPassword('        ');
      setErrors({ newPassword: 'Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.' });
    } else if (previewState === 'same_as_old') {
      // Node 1:1097: Mật khẩu mới trùng mật khẩu hiện tại
      setOldPassword('12345678');
      setNewPassword('12345678');
      setConfirmPassword('12345678');
      setErrors({ newPassword: 'Mật khẩu mới phải khác mật khẩu hiện tại.' });
    } else if (previewState === 'save_error') {
      // Node 1:1207: Lỗi lưu hệ thống
      setOldPassword('12345678');
      setNewPassword('P@sswordNew88');
      setConfirmPassword('P@sswordNew88');
      setErrors({ form: 'Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.' });
    } else if (previewState === 'cancel') {
      // Node 1:1406: Trước khi chọn Hủy bỏ
      setOldPassword('12345678');
      setNewPassword('P@sswordNew88');
      setConfirmPassword('P@sswordNew88');
    }
  }, [previewState]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Node 1:534: Khi cả ba trường đang trống, hiển thị banner lỗi tổng hợp, không viền đỏ ô nhập
    const isAllEmpty = isSelf
      ? !oldPassword.trim() && !newPassword.trim() && !confirmPassword.trim()
      : !newPassword.trim() && !confirmPassword.trim();

    if (isAllEmpty) {
      setErrors({ form: 'Vui lòng điền đầy đủ các thông tin bắt buộc.' });
      return;
    }

    const newErrors: Record<string, string> = {};

    if (isSelf && !oldPassword.trim()) {
      newErrors.oldPassword = 'Vui lòng nhập mật khẩu hiện tại.';
    }

    if (!newPassword.trim()) {
      newErrors.newPassword = 'Vui lòng nhập mật khẩu mới.';
    } else if (newPassword.trim().length < 8) {
      newErrors.newPassword = 'Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.';
    } else if (isSelf && oldPassword.trim() && newPassword.trim() === oldPassword.trim()) {
      newErrors.newPassword = 'Mật khẩu mới phải khác mật khẩu hiện tại.';
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu mới.';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu mới không trùng khớp, vui lòng nhập lại.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const res = await changePassword(
        targetUser?.id || 'usr_current',
        { oldPassword, newPassword, confirmPassword },
        isSelf
      );
      if (onSuccess) {
        onSuccess(res.message);
      } else {
        onClose();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('Mật khẩu hiện tại không đúng')) {
        setErrors({ oldPassword: msg });
      } else if (msg.includes('Mật khẩu mới phải khác')) {
        setErrors({ newPassword: msg });
      } else if (msg.includes('không trùng khớp')) {
        setErrors({ confirmPassword: msg });
      } else {
        setErrors({ form: 'Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isOwner = role === 'OWNER';
  let modalNodeId = isOwner ? '1:1517' : '1:310';
  let modalName = isOwner ? 'Đổi mật khẩu · Chủ cửa hàng · Ban đầu' : '33 · Đổi mật khẩu · Ban đầu';
  if (!isOwner) {
    if (previewState === 'valid_filled') {
      modalNodeId = '1:422';
      modalName = '34 · Đổi mật khẩu · Đã nhập';
    } else if (previewState === 'empty') {
      modalNodeId = '1:534';
      modalName = '35 · Đổi mật khẩu · Thiếu thông tin';
    } else if (previewState === 'wrong_old') {
      modalNodeId = '1:649';
      modalName = '36 · Đổi mật khẩu · Mật khẩu hiện tại sai';
    } else if (previewState === 'mismatch') {
      modalNodeId = '1:761';
      modalName = '37 · Đổi mật khẩu · Xác nhận không khớp';
    } else if (previewState === 'short_pass') {
      modalNodeId = '1:872';
      modalName = '38 · Đổi mật khẩu · Mật khẩu mới quá ngắn';
    } else if (previewState === 'whitespace_pass') {
      modalNodeId = '1:982';
      modalName = 'Đổi mật khẩu · Pass khoảng trắng';
    } else if (previewState === 'same_as_old') {
      modalNodeId = '1:1097';
      modalName = '39 · Đổi mật khẩu · Mật khẩu mới trùng mật khẩu hiện tại';
    } else if (previewState === 'save_error') {
      modalNodeId = '1:1207';
      modalName = '40 · Đổi mật khẩu · Lỗi lưu';
    } else if (previewState === 'cancel') {
      modalNodeId = '1:1406';
      modalName = '42 · Đổi mật khẩu · Xác nhận bỏ thay đổi';
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs font-['Inter',sans-serif]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="password-modal-title"
      data-node-id={modalNodeId}
      data-name={modalName}
    >
      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-[520px] bg-white rounded-[12px] shadow-2xl border border-[#e2e8f0] p-[24px] text-left animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
          <div>
            <h3 id="password-modal-title" className="text-[18px] font-bold text-[#0f172a] leading-[27px]">
              {isSelf ? 'Đổi mật khẩu' : 'Đặt lại mật khẩu'}
            </h3>
            {targetUser && (
              <p className="text-[12px] text-[#64748b] mt-0.5">
                Tài khoản: <span className="font-semibold text-[#0f172a]">{targetUser.name}</span> ({targetUser.username})
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors"
            aria-label="Đóng"
          >
            <img alt="Đóng" className="size-[18px]" src="/assets/x.svg" />
          </button>
        </div>

        {/* Form Error Banner nếu có lỗi hệ thống (Node 1:1257) */}
        {errors.form && (
          <div
            className="mt-4 p-3 bg-[#fee2e2] rounded-[8px] flex items-center gap-2"
            data-node-id="1:1257"
            role="alert"
          >
            <img alt="Lỗi" className="size-[16px] shrink-0" src="/assets/alert-circle.svg" />
            <span className="text-[13px] text-[#b91c1c] font-normal">{errors.form}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-[16px]" noValidate>
          {/* Mật khẩu hiện tại * */}
          {isSelf && (
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="old-password"
                className="text-[12px] font-medium leading-[18px] text-[#0f172a]"
              >
                Mật khẩu hiện tại *
              </label>
              <div
                className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center gap-[10px] border transition-colors"
                style={{
                  border: errors.oldPassword ? '1px solid #ef4444' : '1px solid #e2e8f0',
                }}
              >
                <input
                  id="old-password"
                  name="oldPassword"
                  type={showOld ? 'text' : 'password'}
                  placeholder="Nhập mật khẩu hiện tại"
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                    if (errors.oldPassword) setErrors((prev) => ({ ...prev, oldPassword: '' }));
                    if (errors.form) setErrors((prev) => ({ ...prev, form: '' }));
                  }}
                  className="w-full h-full bg-transparent border-none outline-none text-[13px] text-[#0f172a] placeholder:text-[#64748b]"
                />
                <button
                  type="button"
                  onClick={() => setShowOld(!showOld)}
                  className="size-[18px] text-[#64748b] hover:text-[#0f172a] transition-colors shrink-0"
                  aria-label={showOld ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                >
                  <img
                    alt=""
                    className="size-full"
                    src={showOld ? '/assets/eye-off.svg' : '/assets/eye.svg'}
                  />
                </button>
              </div>
              {errors.oldPassword && (
                <p className="text-[11px] leading-[17px] text-[#ef4444] font-normal" data-node-id="1:706">
                  {errors.oldPassword}
                </p>
              )}
            </div>
          )}

          {/* Mật khẩu mới * */}
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="new-password"
              className="text-[12px] font-medium leading-[18px] text-[#0f172a]"
            >
              Mật khẩu mới *
            </label>
            <div
              className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center gap-[10px] border transition-colors"
              style={{
                border: errors.newPassword ? '1px solid #ef4444' : '1px solid #e2e8f0',
              }}
            >
              <input
                id="new-password"
                name="newPassword"
                type={showNew ? 'text' : 'password'}
                placeholder="Nhập mật khẩu mới"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  if (errors.newPassword) setErrors((prev) => ({ ...prev, newPassword: '' }));
                  if (errors.form) setErrors((prev) => ({ ...prev, form: '' }));
                }}
                className="w-full h-full bg-transparent border-none outline-none text-[13px] text-[#0f172a] placeholder:text-[#64748b]"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="size-[18px] text-[#64748b] hover:text-[#0f172a] transition-colors shrink-0"
                aria-label={showNew ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                <img
                  alt=""
                  className="size-full"
                  src={showNew ? '/assets/eye-off.svg' : '/assets/eye.svg'}
                />
              </button>
            </div>
            <p
              className="text-[11px] leading-[17px] font-normal"
              style={{ color: errors.newPassword ? '#ef4444' : '#64748b' }}
              data-node-id={errors.newPassword ? '1:1154' : '1:1505'}
            >
              {errors.newPassword ||
                'Ít nhất 8 ký tự, không chỉ gồm khoảng trắng và khác mật khẩu hiện tại.'}
            </p>
          </div>

          {/* Xác nhận mật khẩu mới * */}
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="confirm-password"
              className="text-[12px] font-medium leading-[18px] text-[#0f172a]"
            >
              Xác nhận mật khẩu mới *
            </label>
            <div
              className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center gap-[10px] border transition-colors"
              style={{
                border: errors.confirmPassword ? '1px solid #ef4444' : '1px solid #e2e8f0',
              }}
            >
              <input
                id="confirm-password"
                name="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                placeholder="Nhập lại mật khẩu mới"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: '' }));
                  if (errors.form) setErrors((prev) => ({ ...prev, form: '' }));
                }}
                className="w-full h-full bg-transparent border-none outline-none text-[13px] text-[#0f172a] placeholder:text-[#64748b]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="size-[18px] text-[#64748b] hover:text-[#0f172a] transition-colors shrink-0"
                aria-label={showConfirm ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                <img
                  alt=""
                  className="size-full"
                  src={showConfirm ? '/assets/eye-off.svg' : '/assets/eye.svg'}
                />
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-[11px] leading-[17px] text-[#ef4444] font-normal" data-node-id="1:818">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-end gap-[12px] pt-4 mt-2 border-t border-[#f1f5f9]">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="h-[40px] px-[16px] bg-white border border-[#e2e8f0] hover:bg-[#f1f5f9] rounded-[8px] text-[13px] font-semibold text-[#0f172a] transition-colors cursor-pointer"
              data-node-id="1:1514"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="h-[40px] px-[16px] bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] disabled:opacity-60 rounded-[8px] text-[13px] font-semibold text-white shadow-xs transition-colors cursor-pointer"
              data-node-id="1:1516"
            >
              {isLoading ? 'Đang lưu...' : 'Lưu'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
