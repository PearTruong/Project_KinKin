'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AccountsListView } from '@/components/accounts/accounts-list-view';
import { PasswordModal } from '@/components/accounts/password-modal';

function AccountPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  const previewParam = searchParams.get('preview') as any;

  useEffect(() => {
    const savedRole = localStorage.getItem('kinkin-role');
    setRole(savedRole || 'UNAUTHENTICATED');
  }, []);

  if (role === null) {
    return (
      <div className="flex items-center justify-center min-h-[300px] w-full text-xs text-[#64748b]">
        Đang kiểm tra quyền truy cập...
      </div>
    );
  }

  return (
    <>
      <AccountsListView currentRole={role} externalNotice={successNotice} />
      <PasswordModal
        isOpen={isModalOpen}
        isSelf={true}
        role={role}
        previewState={previewParam || undefined}
        onClose={() => {
          setIsModalOpen(false);
          router.push('/accounts');
        }}
        onSuccess={(msg) => {
          setIsModalOpen(false);
          setSuccessNotice(msg);
        }}
      />
    </>
  );
}

export default function AccountPasswordPage() {
  return (
    <Suspense fallback={<div className="p-4 text-xs text-[#64748b]">Đang tải...</div>}>
      <AccountPasswordContent />
    </Suspense>
  );
}
