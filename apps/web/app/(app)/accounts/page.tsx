'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { AccountsListView } from '@/components/accounts/accounts-list-view';

function AccountsContent() {
  const [role, setRole] = useState<string | null>(null);

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

  return <AccountsListView currentRole={role} />;
}

export default function AccountsPage() {
  return (
    <Suspense fallback={<div className="p-4 text-xs text-[#64748b]">Đang tải...</div>}>
      <AccountsContent />
    </Suspense>
  );
}
