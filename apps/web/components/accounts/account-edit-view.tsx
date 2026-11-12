'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  getAccounts,
  updateAccount,
  type AccountUser,
} from '@/lib/accounts-adapter';

export interface AccountEditViewProps {
  currentRole?: string;
}

export function AccountEditView({ currentRole: initialRole }: AccountEditViewProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const targetId = searchParams?.get('id');
  const preview = searchParams?.get('preview');

  const [currentRole, setCurrentRole] = useState<string | null>(initialRole ?? null);

  useEffect(() => {
    if (initialRole !== undefined) {
      setCurrentRole(initialRole);
      return;
    }
    const savedRole = localStorage.getItem('kinkin-role');
    setCurrentRole(savedRole || 'UNAUTHENTICATED');
  }, [initialRole]);

  const [user, setUser] = useState<AccountUser | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    if (currentRole !== 'OWNER') return;

    let isCancelled = false;

    async function loadUser() {
      const list = await getAccounts({ role: 'EMPLOYEE' });
      if (isCancelled) return;

      let found: AccountUser | undefined;
      if (targetId) {
        found = list.find((a) => a.id === targetId || a.username === targetId);
      }
      if (!found && list.length > 0) {
        found = list[0];
      }

      if (found) {
        setUser(found);

        // Áp dụng giá trị preview đồng bộ SAU KHI user tải xong để triệt tiêu race condition
        let initialName = found.name;
        let initialPhone = found.phone;
        const initialErrors: Record<string, string> = {};

        if (preview === 'empty_name') {
          // Node 1:3076: Họ tên bị bỏ trống
          initialName = '';
          initialErrors.name = 'Vui lòng nhập họ tên.';
        } else if (preview === 'invalid_phone' || preview === 'invalid_format') {
          // Node 1:2528 / 1:2613: SĐT không hợp lệ / sai định dạng
          initialPhone = '0912345';
          initialErrors.phone = 'Số điện thoại phải gồm 10 chữ số, bắt đầu bằng 0.';
        } else if (preview === 'duplicate_phone') {
          // Node 1:2698: SĐT đã được sử dụng (trùng số minhanh)
          initialPhone = '0901234567';
          initialErrors.phone = 'Số điện thoại đã được sử dụng.';
        } else if (preview === 'save_error') {
          // Node 1:2783: Lỗi lưu hệ thống
          initialErrors.form = 'Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.';
        } else if (preview === 'cancel_dirty') {
          // Node 1:2980: Xác nhận bỏ thay đổi
          initialName = found.name + ' Đã Sửa';
          setShowCancelModal(true);
        }

        setName(initialName);
        setPhone(initialPhone);
        setErrors(initialErrors);
      }
    }

    loadUser();

    return () => {
      isCancelled = true;
    };
  }, [currentRole, targetId, preview]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên.';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại.';
    } else if (!/^0\d{9}$/.test(phone.trim())) {
      newErrors.phone = 'Số điện thoại phải gồm 10 chữ số, bắt đầu bằng 0.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      await updateAccount(user.id, {
        name: name.trim(),
        phone: phone.trim(),
        role: user.role,
      });
      router.push('/accounts?success=updated');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('Số điện thoại đã được sử dụng')) {
        setErrors({ phone: msg });
      } else if (msg.includes('Số điện thoại')) {
        setErrors({ phone: msg });
      } else if (msg.includes('họ tên')) {
        setErrors({ name: msg });
      } else {
        setErrors({ form: 'Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isActive = user?.status === 'ACTIVE';

  const handleCancelClick = () => {
    const isDirty = user && (name !== user.name || phone !== user.phone);
    if (isDirty) {
      setShowCancelModal(true);
    } else {
      router.push('/accounts');
    }
  };

  if (currentRole === null) {
    return (
      <div className="flex items-center justify-center min-h-[300px] w-full text-xs text-[#64748b]">
        Đang kiểm tra quyền truy cập...
      </div>
    );
  }

  if (currentRole !== 'OWNER') {
    return (
      <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 text-center max-w-lg mx-auto mt-12 font-['Inter',sans-serif]">
        <div className="size-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-4">
          <img alt="Khóa" className="size-6" src="/assets/key.svg" />
        </div>
        <h3 className="text-base font-bold text-[#0f172a]">Giới hạn quyền truy cập</h3>
        <p className="text-xs text-[#64748b] mt-2 leading-relaxed">
          Chức năng Quản lý tài khoản chỉ dành cho Chủ cửa hàng (OWNER).
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-[20px] w-full font-['Inter',sans-serif]"
      data-node-id={isActive ? '1:2360' : '1:2444'}
      data-name={isActive ? '22 · Sửa tài khoản · Nhân viên hoạt động' : '23 · Sửa tài khoản · Nhân viên vô hiệu hóa'}
    >
      {/* Tiêu đề màn hình: "Sửa thông tin tài khoản" */}
      <div className="flex items-center justify-between w-full" data-node-id="1:2408">
        <h1 className="text-[22px] font-bold leading-[28px] text-[#0f172a]">
          Sửa thông tin tài khoản
        </h1>
      </div>

      {/* Form Error Banner nếu có lỗi hệ thống (Node 1:2833) */}
      {errors.form && (
        <div
          className="bg-[#fee2e2] flex gap-[8px] items-start p-[12px] rounded-[8px] shrink-0 w-full"
          data-node-id="1:2833"
          role="alert"
        >
          <img alt="Lỗi" className="size-[16px] shrink-0 mt-0.5" src="/assets/alert-circle.svg" />
          <p className="text-[13px] leading-[20px] text-[#b91c1c] font-normal" data-node-id="1:2835">
            {errors.form}
          </p>
        </div>
      )}

      {/* Khối Card Thông tin nhân viên */}
      <div
        className="bg-white border border-[#e2e8f0] rounded-[12px] p-[24px] flex flex-col gap-[24px] shadow-xs w-full"
        data-node-id="1:2410"
      >
        <div className="flex items-center justify-between w-full pb-1 border-b border-[#f1f5f9]">
          <h2 className="text-[14px] font-semibold leading-[21px] text-[#0f172a]">
            Thông tin nhân viên
          </h2>
          {/* Badge trạng thái Hoạt động / Đã vô hiệu hóa */}
          <div
            className={`px-[9px] py-[3px] rounded-[6px] text-[11px] font-medium ${
              isActive ? 'bg-[#eff6ff] text-[#2563eb]' : 'bg-[#fee2e2] text-[#ef4444]'
            }`}
          >
            {isActive ? 'Hoạt động' : 'Đã vô hiệu hóa'}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[20px] w-full">
            {/* Tên đăng nhập (Readonly / Locked) */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-medium leading-[18px] text-[#0f172a]">
                Tên đăng nhập
              </label>
              <div className="h-[44px] px-[12px] bg-[#f1f5f9] border border-[#e2e8f0] rounded-[8px] flex items-center justify-between">
                <span className="text-[13px] text-[#64748b] font-normal">
                  {user?.username || '...'}
                </span>
                <img alt="Khóa" className="size-[16px] opacity-70" src="/assets/lock.svg" />
              </div>
            </div>

            {/* Họ tên * */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="edit-name" className="text-[12px] font-medium leading-[18px] text-[#0f172a]">
                Họ tên *
              </label>
              <div
                className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center border transition-colors"
                style={{
                  border: errors.name ? '1px solid #ef4444' : '1px solid #e2e8f0',
                }}
              >
                <input
                  id="edit-name"
                  name="name"
                  type="text"
                  placeholder="Nhập họ tên"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    if (errors.form) setErrors((prev) => ({ ...prev, form: '' }));
                  }}
                  className="w-full h-full bg-transparent border-none outline-none text-[13px] text-[#0f172a] placeholder:text-[#64748b]"
                />
              </div>
              {errors.name && (
                <p className="text-[11px] leading-[17px] text-[#ef4444] font-normal" data-node-id="1:3076">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Số điện thoại * */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="edit-phone" className="text-[12px] font-medium leading-[18px] text-[#0f172a]">
                Số điện thoại *
              </label>
              <div
                className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center border transition-colors"
                style={{
                  border: errors.phone ? '1px solid #ef4444' : '1px solid #e2e8f0',
                }}
              >
                <input
                  id="edit-phone"
                  name="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                    if (errors.form) setErrors((prev) => ({ ...prev, form: '' }));
                  }}
                  className="w-full h-full bg-transparent border-none outline-none text-[13px] text-[#0f172a] placeholder:text-[#64748b]"
                />
              </div>
              {errors.phone && (
                <p
                  className="text-[11px] leading-[17px] text-[#ef4444] font-normal"
                  data-node-id={preview === 'invalid_format' ? '1:2613' : '1:2528'}
                >
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Vai trò (Readonly / Locked) */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-medium leading-[18px] text-[#0f172a]">
                Vai trò
              </label>
              <div className="h-[44px] px-[12px] bg-[#f1f5f9] border border-[#e2e8f0] rounded-[8px] flex items-center justify-between">
                <span className="text-[13px] text-[#64748b] font-normal">
                  Nhân viên
                </span>
                <img alt="Khóa" className="size-[16px] opacity-70" src="/assets/lock.svg" />
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e2e8f0] w-full" />

          {/* Nút thao tác Hủy bỏ & Lưu */}
          <div className="flex items-center justify-end gap-[12px] w-full">
            <button
              type="button"
              onClick={handleCancelClick}
              className="h-[40px] px-[16px] bg-white border border-[#e2e8f0] hover:bg-[#f1f5f9] rounded-[8px] text-[13px] font-semibold text-[#0f172a] transition-colors cursor-pointer"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="h-[40px] px-[16px] bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] disabled:opacity-60 rounded-[8px] text-[13px] font-semibold text-white shadow-xs transition-colors cursor-pointer"
            >
              {isLoading ? 'Đang lưu...' : 'Lưu'}
            </button>
          </div>
        </form>
      </div>

      {/* Modal Bỏ thay đổi? khớp Frame 1:2980 */}
      {showCancelModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          data-node-id="1:2980"
        >
          <div className="w-full max-w-[480px] bg-white rounded-xl shadow-2xl border border-[#e2e8f0] p-6 text-left animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">
              Bỏ thay đổi?
            </h3>
            <p className="text-sm text-[#64748b] leading-relaxed mb-6">
              Các thông tin bạn vừa chỉnh sửa sẽ không được lưu nếu bạn rời khỏi trang này.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => router.push('/accounts')}
                className="h-[38px] px-4 border border-[#e2e8f0] rounded-lg text-xs font-semibold text-[#0f172a] hover:bg-[#f1f5f9] transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="h-[38px] px-4 bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
              >
                Tiếp tục chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
