'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createAccount } from '@/lib/accounts-adapter';

export interface AccountCreateViewProps {
  currentRole?: string;
}

export function AccountCreateView({ currentRole: initialRole }: AccountCreateViewProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
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

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Khởi tạo trạng thái mô phỏng theo frame Figma nếu có query param preview (chỉ khi là OWNER)
  useEffect(() => {
    if (currentRole !== 'OWNER') return;

    if (preview === 'valid_filled') {
      // Node 1:3252: 14 · Tạo tài khoản · Đã nhập hợp lệ
      setUsername('thuha');
      setName('Phạm Thu Hà');
      setPhone('0934567890');
      setPassword('P@ssword123');
      setErrors({});
    } else if (preview === 'empty_fields') {
      // Node 1:3342: Thiếu thông tin bắt buộc
      setErrors({
        username: 'Vui lòng nhập tên đăng nhập.',
        name: 'Vui lòng nhập họ tên.',
        phone: 'Vui lòng nhập số điện thoại.',
        password: 'Vui lòng nhập mật khẩu.',
      });
    } else if (preview === 'duplicate_username') {
      // Node 1:3435: Trùng tên đăng nhập
      setUsername('hoangnam');
      setName('Trần Hoàng Nam');
      setPhone('0934567890');
      setPassword('P@ssword123');
      setErrors({ username: 'Tên đăng nhập đã tồn tại.' });
    } else if (preview === 'duplicate_phone') {
      // Node 1:3526: Trùng số điện thoại
      setUsername('thuha');
      setName('Phạm Thu Hà');
      setPhone('0912345678');
      setPassword('P@ssword123');
      setErrors({ phone: 'Số điện thoại đã được sử dụng.' });
    } else if (preview === 'invalid_phone_short_pass') {
      // Node 1:3617: Sai số điện thoại và mật khẩu ngắn
      setUsername('thuha');
      setName('Phạm Thu Hà');
      setPhone('0912345');
      setPassword('123456');
      setErrors({
        phone: 'Số điện thoại phải gồm 10 chữ số, bắt đầu bằng 0.',
        password: 'Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.',
      });
    } else if (preview === 'whitespace_pass') {
      // Node 1:3708: Mật khẩu chỉ gồm khoảng trắng
      setUsername('thuha');
      setName('Phạm Thu Hà');
      setPhone('0934567890');
      setPassword('        ');
      setErrors({
        password: 'Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.',
      });
    } else if (preview === 'system_error') {
      // Node 1:3798: Lỗi hệ thống
      setUsername('thuha');
      setName('Phạm Thu Hà');
      setPhone('0934567890');
      setPassword('P@ssword123');
      setErrors({
        form: 'Tạo tài khoản thất bại do lỗi hệ thống. Vui lòng thử lại.',
      });
    } else if (preview === 'cancel_dirty') {
      // Node 1:4099: Xác nhận bỏ thay đổi
      setUsername('thuha');
      setName('Phạm Thu Hà');
      setPhone('0934567890');
      setPassword('P@ssword123');
      setShowCancelModal(true);
    }
  }, [currentRole, preview]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!username.trim()) {
      newErrors.username = 'Vui lòng nhập tên đăng nhập.';
    }
    if (!name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên.';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại.';
    } else if (!/^0\d{9}$/.test(phone.trim())) {
      newErrors.phone = 'Số điện thoại phải gồm 10 chữ số, bắt đầu bằng 0.';
    }

    if (!password.trim()) {
      newErrors.password = 'Vui lòng nhập mật khẩu.';
    } else if (password.trim().length < 8) {
      newErrors.password = 'Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      await createAccount({
        username: username.trim(),
        name: name.trim(),
        phone: phone.trim(),
        password,
        role: 'EMPLOYEE',
      });
      // Điều hướng về danh sách nhân viên kèm thông báo thành công (Frame 1:3892)
      router.push('/accounts?success=created');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('Tên đăng nhập')) {
        setErrors({ username: msg });
      } else if (msg.includes('Số điện thoại')) {
        setErrors({ phone: msg });
      } else if (msg.includes('Mật khẩu')) {
        setErrors({ password: msg });
      } else {
        setErrors({ form: 'Tạo tài khoản thất bại do lỗi hệ thống. Vui lòng thử lại.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const hasDirtyValues = username.trim() || name.trim() || phone.trim() || password.trim();

  const handleCancelClick = () => {
    if (hasDirtyValues) {
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

  let containerNodeId = '1:3162';
  let containerName = '13 · Tạo tài khoản · Ban đầu';
  if (preview === 'valid_filled') {
    containerNodeId = '1:3252';
    containerName = '14 · Tạo tài khoản · Đã nhập hợp lệ';
  } else if (preview === 'empty_fields') {
    containerNodeId = '1:3342';
    containerName = '15 · Tạo tài khoản · Thiếu thông tin';
  } else if (preview === 'duplicate_username') {
    containerNodeId = '1:3435';
    containerName = '16 · Tạo tài khoản · Trùng username';
  } else if (preview === 'duplicate_phone') {
    containerNodeId = '1:3526';
    containerName = '17 · Tạo tài khoản · Trùng SĐT';
  } else if (preview === 'invalid_phone_short_pass') {
    containerNodeId = '1:3617';
    containerName = '18 · Tạo tài khoản · Lỗi SĐT & pass';
  } else if (preview === 'whitespace_pass') {
    containerNodeId = '1:3708';
    containerName = 'Tạo tài khoản · Pass khoảng trắng';
  } else if (preview === 'system_error') {
    containerNodeId = '1:3798';
    containerName = '19 · Tạo tài khoản · Lỗi hệ thống';
  } else if (preview === 'cancel_dirty') {
    containerNodeId = '1:4099';
    containerName = '20 · Tạo tài khoản · Xác nhận bỏ thay đổi';
  }

  return (
    <div
      className="flex flex-col gap-[20px] w-full font-['Inter',sans-serif]"
      data-node-id={containerNodeId}
      data-name={containerName}
    >
      {/* Tiêu đề màn hình: "Tạo tài khoản mới" (Node 1:3211) */}
      <div className="flex items-center justify-between w-full" data-node-id="1:3210">
        <h1
          className="text-[22px] font-bold leading-[28px] text-[#0f172a]"
          data-node-id="1:3211"
        >
          Tạo tài khoản mới
        </h1>
      </div>

      {/* Form Error Banner nếu có lỗi hệ thống (Node 1:3848) */}
      {errors.form && (
        <div
          className="bg-[#fee2e2] flex gap-[8px] items-start p-[12px] rounded-[8px] shrink-0 w-full"
          data-node-id="1:3848"
          role="alert"
        >
          <img alt="Lỗi" className="size-[16px] shrink-0 mt-0.5" src="/assets/alert-circle.svg" />
          <p className="text-[13px] leading-[20px] text-[#b91c1c] font-normal" data-node-id="1:3850">
            {errors.form}
          </p>
        </div>
      )}

      {/* Khối Card Thông tin nhân viên (Node 1:3212) */}
      <div
        className="bg-white border border-[#e2e8f0] rounded-[12px] p-[24px] flex flex-col gap-[24px] shadow-xs w-full"
        data-node-id="1:3212"
      >
        <div className="flex items-center justify-between w-full" data-node-id="1:3213">
          <h2
            className="text-[14px] font-semibold leading-[21px] text-[#0f172a]"
            data-node-id="1:3214"
          >
            Thông tin nhân viên
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[20px] w-full">
            {/* Tên đăng nhập * (Node 1:3217) */}
            <div className="flex flex-col gap-[6px]" data-node-id="1:3217">
              <label
                htmlFor="create-username"
                className="text-[12px] font-medium leading-[18px] text-[#0f172a]"
                data-node-id="1:3218"
              >
                Tên đăng nhập *
              </label>
              <div
                className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center border transition-colors"
                style={{
                  border: errors.username ? '1px solid #ef4444' : '1px solid #e2e8f0',
                }}
                data-node-id="1:3219"
              >
                <input
                  id="create-username"
                  name="username"
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (errors.username) setErrors((prev) => ({ ...prev, username: '' }));
                    if (errors.form) setErrors((prev) => ({ ...prev, form: '' }));
                  }}
                  className="w-full h-full bg-transparent border-none outline-none text-[13px] text-[#0f172a] placeholder:text-[#64748b]"
                />
              </div>
              {errors.username && (
                <p className="text-[11px] leading-[17px] text-[#ef4444] font-normal" data-node-id="1:3494">
                  {errors.username}
                </p>
              )}
            </div>

            {/* Họ tên * (Node 1:3221) */}
            <div className="flex flex-col gap-[6px]" data-node-id="1:3221">
              <label
                htmlFor="create-name"
                className="text-[12px] font-medium leading-[18px] text-[#0f172a]"
                data-node-id="1:3222"
              >
                Họ tên *
              </label>
              <div
                className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center border transition-colors"
                style={{
                  border: errors.name ? '1px solid #ef4444' : '1px solid #e2e8f0',
                }}
                data-node-id="1:3223"
              >
                <input
                  id="create-name"
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
                <p className="text-[11px] leading-[17px] text-[#ef4444] font-normal">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Số điện thoại * (Node 1:3226) */}
            <div className="flex flex-col gap-[6px]" data-node-id="1:3226">
              <label
                htmlFor="create-phone"
                className="text-[12px] font-medium leading-[18px] text-[#0f172a]"
                data-node-id="1:3227"
              >
                Số điện thoại *
              </label>
              <div
                className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center border transition-colors"
                style={{
                  border: errors.phone ? '1px solid #ef4444' : '1px solid #e2e8f0',
                }}
                data-node-id="1:3228"
              >
                <input
                  id="create-phone"
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
                <p className="text-[11px] leading-[17px] text-[#ef4444] font-normal" data-node-id="1:3584">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Mật khẩu ban đầu * (Node 1:3230) */}
            <div className="flex flex-col gap-[6px]" data-node-id="1:3230">
              <label
                htmlFor="create-password"
                className="text-[12px] font-medium leading-[18px] text-[#0f172a]"
                data-node-id="1:3231"
              >
                Mật khẩu ban đầu *
              </label>
              <div
                className="h-[44px] px-[12px] bg-white rounded-[8px] flex items-center gap-[10px] border transition-colors"
                style={{
                  border: errors.password ? '1px solid #ef4444' : '1px solid #e2e8f0',
                }}
                data-node-id="1:3232"
              >
                <input
                  id="create-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
                    if (errors.form) setErrors((prev) => ({ ...prev, form: '' }));
                  }}
                  className="w-full h-full bg-transparent border-none outline-none text-[13px] text-[#0f172a] placeholder:text-[#64748b]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="size-[18px] text-[#64748b] hover:text-[#0f172a] transition-colors shrink-0"
                  aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                >
                  <img
                    alt=""
                    className="size-full"
                    src={showPassword ? '/assets/eye-off.svg' : '/assets/eye.svg'}
                  />
                </button>
              </div>
              <p
                className="text-[11px] leading-[17px] font-normal"
                style={{ color: errors.password ? '#ef4444' : '#64748b' }}
                data-node-id="1:3236"
              >
                {errors.password || 'Ít nhất 8 ký tự, không chỉ gồm khoảng trắng.'}
              </p>
            </div>

            {/* Vai trò * (Node 1:3238 - Readonly) */}
            <div className="flex flex-col gap-[6px]" data-node-id="1:3238">
              <label
                className="text-[12px] font-medium leading-[18px] text-[#0f172a]"
                data-node-id="1:3240"
              >
                Vai trò *
              </label>
              <div
                className="h-[44px] px-[12px] bg-[#f1f5f9] border border-[#e2e8f0] rounded-[8px] flex items-center justify-between"
                data-node-id="1:3241"
              >
                <span className="text-[13px] text-[#0f172a] font-normal" data-node-id="1:3242">
                  Nhân viên
                </span>
                <div data-node-id="1:3243">
                  <img alt="Khóa" className="size-[16px] opacity-70" src="/assets/lock.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e2e8f0] w-full" data-node-id="1:3246" />

          {/* Nút thao tác Hủy bỏ & Lưu (Node 1:3247) */}
          <div className="flex items-center justify-end gap-[12px] w-full" data-node-id="1:3247">
            <button
              type="button"
              onClick={handleCancelClick}
              className="h-[40px] px-[16px] bg-white border border-[#e2e8f0] hover:bg-[#f1f5f9] rounded-[8px] text-[13px] font-semibold text-[#0f172a] transition-colors cursor-pointer"
              data-node-id="1:3248"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="h-[40px] px-[16px] bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] disabled:opacity-60 rounded-[8px] text-[13px] font-semibold text-white shadow-xs transition-colors cursor-pointer"
              data-node-id="1:3250"
            >
              {isLoading ? 'Đang lưu...' : 'Lưu'}
            </button>
          </div>
        </form>
      </div>

      {/* Modal Bỏ thay đổi? khớp Frame 1:3999 / 1:4099 */}
      {showCancelModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          data-node-id={preview === 'cancel_dirty' ? '1:4099' : '1:3999'}
          data-name={preview === 'cancel_dirty' ? '20 · Tạo tài khoản · Xác nhận bỏ thay đổi' : '21 · Tạo tài khoản · Bỏ thay đổi'}
        >
          <div className="w-full max-w-[480px] bg-white rounded-xl shadow-2xl border border-[#e2e8f0] p-6 text-left animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-lg font-bold text-[#0f172a] mb-2" data-node-id="1:4002">
              Bỏ thay đổi?
            </h3>
            <p className="text-sm text-[#64748b] leading-relaxed mb-6" data-node-id="1:4004">
              Các thông tin bạn vừa nhập sẽ không được lưu nếu bạn rời khỏi trang này.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => router.push('/accounts')}
                className="h-[38px] px-4 border border-[#e2e8f0] rounded-lg text-xs font-semibold text-[#0f172a] hover:bg-[#f1f5f9] transition-colors cursor-pointer"
                data-node-id="1:4007"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="h-[38px] px-4 bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
                data-node-id="1:4009"
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
