'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  getAccounts,
  type AccountUser,
} from '@/lib/accounts-adapter';
import { DisableConfirmModal } from './disable-confirm-modal';

export interface AccountsListViewProps {
  currentRole?: string | null;
  externalNotice?: string | null;
}

export function AccountsListView({ currentRole, externalNotice = null }: AccountsListViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [accounts, setAccounts] = useState<AccountUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Modal vô hiệu hóa xác nhận
  const [isDisableModalOpen, setIsDisableModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AccountUser | null>(null);

  const loadData = useCallback(async () => {
    if (currentRole !== 'OWNER') return;
    setIsLoading(true);
    try {
      const fixtureParam = searchParams?.get('fixture') as any;
      // Only reset mock data for an explicit preview fixture. Normal reloads
      // must preserve mutations such as disabling an account in localStorage.
      const data = await getAccounts({ role: 'EMPLOYEE', fixture: fixtureParam || undefined });
      setAccounts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentRole, searchParams]);

  useEffect(() => {
    if (currentRole === 'OWNER') {
      loadData();
    }
  }, [currentRole, loadData]);

  // Kiểm tra thông báo chuyển trang (ví dụ ?success=created -> Tạo tài khoản thành công - Frame 1:3892)
  useEffect(() => {
    const successParam = searchParams?.get('success');
    if (successParam === 'created') {
      setNotification({ type: 'success', message: 'Tạo tài khoản thành công.' });
    } else if (successParam === 'updated') {
      setNotification({ type: 'success', message: 'Lưu tài khoản thành công.' });
    } else if (successParam === 'disabled') {
      setNotification({ type: 'success', message: 'Vô hiệu hóa tài khoản thành công.' });
    } else if (successParam === 'password' || successParam === 'owner_password') {
      setNotification({ type: 'success', message: 'Đổi mật khẩu thành công.' });
    } else if (externalNotice) {
      setNotification({ type: 'success', message: externalNotice });
    }
  }, [searchParams, externalNotice]);

  const handleEdit = (user: AccountUser) => {
    router.push(`/accounts/edit?id=${user.id}`);
  };

  const handleDisableRequest = (user: AccountUser) => {
    setSelectedUser(user);
    setIsDisableModalOpen(true);
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
      <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 text-center max-w-lg mx-auto mt-12">
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

  const successParam = searchParams?.get('success');
  let containerNodeId = '1:4196';
  let containerName = '12 · Tài khoản · Danh sách nhân viên';
  if (successParam === 'updated') {
    containerNodeId = '1:2871';
    containerName = '28 · Sửa tài khoản · Thành công';
  } else if (successParam === 'created') {
    containerNodeId = '1:3892';
    containerName = '20 · Tạo tài khoản · Thành công';
  } else if (successParam === 'disabled') {
    containerNodeId = '1:1914';
    containerName = '31 · Vô hiệu hóa · Thành công';
  } else if (successParam === 'owner_password' || (successParam === 'password' && currentRole === 'OWNER')) {
    containerNodeId = '1:1664';
    containerName = 'Đổi mật khẩu · Chủ cửa hàng · Thành công';
  }

  return (
    <div
      className="flex flex-col gap-[20px] w-full font-['Inter',sans-serif]"
      data-node-id={containerNodeId}
      data-name={containerName}
    >
      {/* Tiêu đề màn hình: "Quản lý tài khoản" (Node 1:4243) */}
      <div className="flex items-center justify-between w-full" data-node-id="1:4242">
        <h1
          className="text-[22px] font-bold leading-[28px] text-[#0f172a]"
          data-node-id="1:4243"
        >
          Quản lý tài khoản
        </h1>
      </div>

      {/* Thông báo thành công: Tạo thành công (Frame 1:3892) hoặc Cập nhật thành công (Frame 1:2871) */}
      {notification && (
        <div
          role="status"
          className="flex items-center gap-[10px] p-[12px] bg-[#f0fdf4] border border-[#dcfce7] rounded-[8px] text-[#16a34a] text-[12px] font-medium shadow-xs animate-in fade-in"
          data-node-id={
            containerNodeId === '1:2871'
              ? '1:2926'
              : containerNodeId === '1:1664'
              ? '1:1664'
              : containerNodeId === '1:3892'
              ? '1:3944'
              : containerNodeId === '1:1914'
              ? '1:1964'
              : undefined
          }
        >
          <div className="size-[16px] rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0">
            <svg className="size-[10px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="flex-1">{notification.message}</span>
        </div>
      )}

      {/* Khối Card Danh sách nhân viên (Node 1:4244) */}
      <div
        className="bg-white border border-[#e2e8f0] rounded-[12px] overflow-hidden shadow-xs w-full"
        data-node-id="1:4244"
      >
        {/* Header của Card: "Danh sách nhân viên" (Node 1:4246) */}
        <div className="px-[20px] py-[16px]" data-node-id="1:4245">
          <h2
            className="text-[16px] font-semibold leading-[24px] text-[#0f172a]"
            data-node-id="1:4246"
          >
            Danh sách nhân viên
          </h2>
        </div>

        {/* Desktop Table View (Viewport 1440×900) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr
                className="bg-[#f8fafc] text-[#64748b] text-[10px] font-semibold border-b border-[#e2e8f0]"
                data-node-id="1:4247"
              >
                <th className="py-[10px] px-[20px]">HỌ TÊN</th>
                <th className="py-[10px] px-[16px] w-[160px]">TÊN ĐĂNG NHẬP</th>
                <th className="py-[10px] px-[16px] w-[160px]">SỐ ĐIỆN THOẠI</th>
                <th className="py-[10px] px-[16px] w-[110px]">VAI TRÒ</th>
                <th className="py-[10px] px-[16px] w-[160px]">TRẠNG THÁI</th>
                <th className="py-[10px] px-[20px] w-[192px]">THAO TÁC</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-xs text-[#64748b]">
                    Đang tải danh sách nhân viên...
                  </td>
                </tr>
              ) : accounts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-xs text-[#64748b]">
                    Chưa có nhân viên nào trong hệ thống.
                  </td>
                </tr>
              ) : (
                accounts.map((user) => {
                  const isActive = user.status === 'ACTIVE';
                  return (
                    <tr
                      key={user.id}
                      className="border-b border-[#e2e8f0] text-[12px] text-[#0f172a] hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-[16px] px-[20px] font-normal">{user.name}</td>
                      <td className="py-[16px] px-[16px] font-normal">{user.username}</td>
                      <td className="py-[16px] px-[16px] font-normal">{user.phone}</td>
                      <td className="py-[16px] px-[16px] font-normal">Nhân viên</td>
                      <td className="py-[16px] px-[16px]">
                        {isActive ? (
                          <span className="bg-[#eff6ff] text-[#2563eb] px-[9px] py-[4px] rounded-[6px] text-[11px] font-medium inline-block">
                            Hoạt động
                          </span>
                        ) : (
                          <span className="bg-[#fef2f2] text-[#ef4444] px-[9px] py-[4px] rounded-[6px] text-[11px] font-medium inline-block">
                            Đã vô hiệu hóa
                          </span>
                        )}
                      </td>
                      <td className="py-[16px] px-[20px]">
                        <div className="flex items-center gap-[16px] text-[12px] font-medium">
                          <button
                            type="button"
                            onClick={() => handleEdit(user)}
                            className="text-[#2563eb] hover:underline cursor-pointer"
                          >
                            Chỉnh sửa
                          </button>
                          {isActive && (
                            <button
                              type="button"
                              onClick={() => handleDisableRequest(user)}
                              className="text-[#ef4444] hover:underline cursor-pointer"
                            >
                              Vô hiệu hóa
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Viewport 390×844) */}
        <div className="md:hidden divide-y divide-[#e2e8f0]">
          {isLoading ? (
            <div className="p-4 text-center text-xs text-[#64748b]">
              Đang tải danh sách nhân viên...
            </div>
          ) : accounts.length === 0 ? (
            <div className="p-4 text-center text-xs text-[#64748b]">
              Chưa có nhân viên nào.
            </div>
          ) : (
            accounts.map((user) => {
              const isActive = user.status === 'ACTIVE';
              return (
                <div key={user.id} className="p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a]">{user.name}</p>
                      <p className="text-xs text-[#64748b]">@{user.username} · {user.phone}</p>
                    </div>
                    {isActive ? (
                      <span className="bg-[#eff6ff] text-[#2563eb] px-[8px] py-[3px] rounded-[6px] text-[10px] font-medium">
                        Hoạt động
                      </span>
                    ) : (
                      <span className="bg-[#fef2f2] text-[#ef4444] px-[8px] py-[3px] rounded-[6px] text-[10px] font-medium">
                        Đã vô hiệu hóa
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(user)}
                      className="px-3 py-1 text-xs font-medium text-[#2563eb] bg-blue-50 rounded"
                    >
                      Chỉnh sửa
                    </button>
                    {isActive && (
                      <button
                        type="button"
                        onClick={() => handleDisableRequest(user)}
                        className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 rounded"
                      >
                        Vô hiệu hóa
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Modal xác nhận vô hiệu hóa (Frame 1:1798) */}
      <DisableConfirmModal
        isOpen={isDisableModalOpen}
        user={selectedUser}
        onClose={() => setIsDisableModalOpen(false)}
        onSuccess={(msg) => {
          setNotification({ type: 'success', message: msg });
          loadData();
        }}
      />
    </div>
  );
}
