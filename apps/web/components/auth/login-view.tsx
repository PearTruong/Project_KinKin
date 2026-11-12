'use client';

import React, { useState } from 'react';

export interface LoginViewProps {
  onLogin: (credentials: { username: string; password: string }) => Promise<void>;
  isLoading?: boolean;
  externalError?: string | null;
  initialUsername?: string;
}

export function LoginView({
  onLogin,
  isLoading = false,
  externalError = null,
  initialUsername = '',
}: LoginViewProps) {
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialUsername) {
      setUsername(initialUsername);
    }
  }, [initialUsername]);

  // Cập nhật lỗi từ bên ngoài nếu có
  React.useEffect(() => {
    if (externalError) {
      if (externalError.toLowerCase().includes('vô hiệu')) {
        setServerError('Tài khoản đã bị vô hiệu hóa.');
      } else {
        setServerError('Tên đăng nhập hoặc mật khẩu không chính xác.');
      }
      // Theo BR UC_01: giữ lại tên đăng nhập, xóa mật khẩu
      setPassword('');
    }
  }, [externalError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error banner
    setServerError(null);

    const isUserEmpty = !username.trim();
    const isPassEmpty = !password.trim();

    // 03 · Đăng nhập · Trống cả hai trường
    if (isUserEmpty && isPassEmpty) {
      setUsernameError('Vui lòng nhập tên đăng nhập.');
      setPasswordError('Vui lòng nhập mật khẩu.');
      return;
    }

    // 04 · Đăng nhập · Trống tên đăng nhập
    if (isUserEmpty) {
      setUsernameError('Vui lòng nhập tên đăng nhập.');
      setPasswordError(null);
      return;
    }

    // 05 · Đăng nhập · Trống mật khẩu
    if (isPassEmpty) {
      setUsernameError(null);
      setPasswordError('Vui lòng nhập mật khẩu.');
      return;
    }

    // Cả hai trường đều có giá trị -> Xóa lỗi validation client
    setUsernameError(null);
    setPasswordError(null);

    try {
      await onLogin({ username: username.trim(), password });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const normalizedMessage = msg.toLowerCase();
      if (normalizedMessage.includes('phản hồi quá chậm')) {
        setServerError(msg);
      } else if (
        normalizedMessage.includes('failed to fetch') ||
        normalizedMessage.includes('networkerror')
      ) {
        setServerError('Không thể kết nối máy chủ. Vui lòng thử lại.');
      } else if (
        normalizedMessage.includes('vô hiệu') ||
        normalizedMessage.includes('disabled') ||
        normalizedMessage.includes('inactive')
      ) {
        setServerError('Tài khoản đã bị vô hiệu hóa.');
      } else {
        setServerError('Tên đăng nhập hoặc mật khẩu không chính xác.');
      }
      // BR Exception 7a & 8a: Giữ lại tên đăng nhập và xóa nội dung mật khẩu
      setPassword('');
    }
  };

  return (
    <div
      className="bg-[#f8fafc] flex flex-col items-center justify-center min-h-screen w-full px-4 font-['Inter',sans-serif]"
      data-node-id="1:4884"
      data-name="01 · Đăng nhập · Ban đầu"
    >
      <div
        className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[24px] items-start p-[24px] rounded-[12px] shrink-0 w-[358px] sm:w-[420px] max-w-[calc(100vw-32px)] shadow-sm"
        data-node-id="1:4885"
        data-name="Frame"
      >
        {/* Header Thương hiệu: Logo 34x34 & Tên cửa hàng (Node 1:4886) */}
        <div
          className="flex items-start justify-center relative shrink-0 w-full"
          data-node-id="1:4886"
          data-name="Frame"
        >
          <div
            className="flex gap-[10px] items-center relative shrink-0"
            data-node-id="1:4887"
            data-name="Frame"
          >
            <div className="relative shrink-0 size-[34px]" data-node-id="1:4888">
              {/* Logo KinKin POS tải cục bộ từ Figma */}
              <img
                alt="KinKin POS Logo"
                className="absolute block inset-0 max-w-none size-full"
                src="/assets/logo.svg"
              />
            </div>
            <div
              className="flex flex-col items-start leading-[1.5] relative shrink-0 whitespace-nowrap"
              data-node-id="1:4890"
            >
              <p
                className="relative shrink-0 text-[#0f172a] text-[22px] font-bold"
                data-node-id="1:4891"
              >
                KinKin POS
              </p>
              <p
                className="relative shrink-0 text-[#64748b] text-[10px]"
                data-node-id="1:4892"
              >
                Cửa hàng phụ kiện giày
              </p>
            </div>
          </div>
        </div>

        {/* Tiêu đề màn hình: "Đăng nhập" (Node 1:4893) */}
        <p
          className="font-bold leading-[28px] relative shrink-0 text-[#0f172a] text-[22px] text-center w-full"
          data-node-id="1:4893"
        >
          Đăng nhập
        </p>

        {/* Banner cảnh báo lỗi: Sai thông tin (Node 1:4414) hoặc Tài khoản vô hiệu hóa (Node 1:4441) */}
        {serverError && (
          <div
            className="bg-[#fee2e2] flex gap-[8px] items-start overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full"
            data-node-id="1:4414"
            data-name="Alert"
            role="alert"
          >
            <div className="relative shrink-0 size-[16px] mt-0.5" data-node-id="1:4415">
              <img
                alt="Lỗi"
                className="absolute block inset-0 max-w-none size-full"
                src="/assets/alert-circle.svg"
              />
            </div>
            <p
              className="flex-[1_0_0] font-normal leading-[20px] text-[#b91c1c] text-[13px]"
              data-node-id="1:4417"
            >
              {serverError}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px] w-full" noValidate>
          {/* Vùng nhập liệu (Node 1:4894) */}
          <div
            className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            data-node-id="1:4894"
            data-name="Frame"
          >
            {/* Trường 1: Tên đăng nhập (Node 1:4895) */}
            <div
              className="flex flex-col gap-[6px] items-start relative shrink-0 w-full"
              data-node-id="1:4895"
              data-name="Frame"
            >
              <label
                htmlFor="username-input"
                className="font-medium leading-[18px] relative shrink-0 text-[#0f172a] text-[12px] w-full"
                data-node-id="1:4896"
              >
                Tên đăng nhập
              </label>
              <div
                className="bg-white flex h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full"
                style={{
                  border: usernameError ? '1px solid #ef4444' : '1px solid #e2e8f0'
                }}
                data-node-id="1:4897"
                data-name="Frame"
              >
                <input
                  id="username-input"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="w-full h-full bg-transparent border-0 outline-none font-normal leading-[20px] text-[#0f172a] text-[13px] placeholder:text-[#64748b]"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (usernameError) setUsernameError(null);
                    if (serverError) setServerError(null);
                  }}
                  data-node-id="1:4898"
                />
              </div>
              {usernameError && (
                <p
                  className="font-normal leading-[17px] relative shrink-0 text-[#ef4444] text-[11px] w-full"
                  data-node-id="1:4346"
                >
                  {usernameError}
                </p>
              )}
            </div>

            {/* Trường 2: Mật khẩu (Node 1:4899) */}
            <div
              className="flex flex-col gap-[6px] items-start relative shrink-0 w-full"
              data-node-id="1:4899"
              data-name="Frame"
            >
              <label
                htmlFor="password-input"
                className="font-medium leading-[18px] relative shrink-0 text-[#0f172a] text-[12px] w-full"
                data-node-id="1:4900"
              >
                Mật khẩu
              </label>
              <div
                className="bg-white flex gap-[10px] h-[44px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full"
                style={{
                  border: passwordError ? '1px solid #ef4444' : '1px solid #e2e8f0'
                }}
                data-node-id="1:4901"
                data-name="Frame"
              >
                <input
                  id="password-input"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  className="w-full h-full bg-transparent border-0 outline-none font-normal leading-[20px] text-[#0f172a] text-[13px] placeholder:text-[#64748b]"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError(null);
                    if (serverError) setServerError(null);
                  }}
                  data-node-id="1:4902"
                />
                {/* Nút Hiện/Ẩn mật khẩu (Node 1:4903) */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="relative shrink-0 size-[18px] flex items-center justify-center cursor-pointer p-0 border-0 bg-transparent"
                  aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  data-node-id="1:4903"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={showPassword ? '/assets/eye-off.svg' : '/assets/eye.svg'}
                  />
                </button>
              </div>
              {passwordError && (
                <p
                  className="font-normal leading-[17px] relative shrink-0 text-[#ef4444] text-[11px] w-full"
                  data-node-id="1:4353"
                >
                  {passwordError}
                </p>
              )}
            </div>
          </div>

          {/* Nút đăng nhập (Node 1:4905) */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] disabled:opacity-60 flex h-[40px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors"
            data-node-id="1:4905"
            data-name="Frame"
          >
            <span
              className="font-semibold leading-[20px] relative shrink-0 text-[13px] text-white whitespace-nowrap"
              data-node-id="1:4906"
            >
              {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

