'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { LoginView } from '@/components/auth/login-view';
import { apiRequest } from '@/lib/api';

type LoginResult = {
  accessToken: string;
  user: { id: string; username: string; name: string; role: string };
};

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Hỗ trợ kiểm tra/đối chiếu độc lập các trạng thái Figma (Node 1:4431 / 1:4404)
  // mà không cần hack backend hoặc can thiệp thông tin tài khoản đăng nhập thật
  const previewParam = searchParams.get('preview');
  const initialError =
    previewParam === 'disabled'
      ? 'Tài khoản đã bị vô hiệu hóa.'
      : previewParam === 'invalid'
      ? 'Tên đăng nhập hoặc mật khẩu không chính xác.'
      : null;
  const initialUser =
    previewParam === 'disabled'
      ? 'tranvanbinh'
      : previewParam === 'invalid'
      ? 'admin'
      : '';

  useEffect(() => {
    if (previewParam) {
      setIsCheckingAuth(false);
      return;
    }

    const token = localStorage.getItem('kinkin-token');
    if (token) {
      router.replace('/');
    } else {
      setIsCheckingAuth(false);
    }
  }, [router, previewParam]);

  const loginMutation = useMutation({
    mutationFn: (values: { username: string; password: string }) =>
      apiRequest<LoginResult>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(values),
      }),
    onSuccess: (result) => {
      localStorage.setItem('kinkin-token', result.accessToken);
      localStorage.setItem('kinkin-user', result.user.name);
      localStorage.setItem('kinkin-role', result.user.role);
      router.replace('/');
    },
  });

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <main>
      <LoginView
        onLogin={async (values) => {
          await loginMutation.mutateAsync(values);
        }}
        isLoading={loginMutation.isPending}
        externalError={initialError}
        initialUsername={initialUser}
      />
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
