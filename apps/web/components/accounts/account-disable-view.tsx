'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  getAccounts,
  disableAccount,
  type AccountUser,
} from '@/lib/accounts-adapter';
import { DisableConfirmModal } from './disable-confirm-modal';

export interface AccountDisableViewProps {
  currentRole?: string;
}

export function AccountDisableView({ currentRole: initialRole }: AccountDisableViewProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const targetId = searchParams?.get('id');
  const preview = searchParams?.get('preview');
  const initialSuccess = searchParams?.get('success') === 'true';

  const [currentRole, setCurrentRole] = useState<string | null>(initialRole ?? null);

  useEffect(() => {
    if (initialRole !== undefined) {
      setCurrentRole(initialRole);
      return;
    }
    const savedRole = localStorage.getItem('kinkin-role');
    setCurrentRole(savedRole || 'UNAUTHENTICATED');
  }, [initialRole]);

  const [accounts, setAccounts] = useState<AccountUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<AccountUser | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(!initialSuccess && preview !== 'save_error');
  const [isSuccess, setIsSuccess] = useState(initialSuccess);
  const [errorBanner, setErrorBanner] = useState<string | null>(
    preview === 'save_error' ? 'Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.' : null
  );
  const [isLoading, setIsLoading] = useState(true);

  const loadData = useCallback(async () => {
    if (currentRole !== 'OWNER') return;
    setIsLoading(true);
    try {
      const list = await getAccounts({ role: 'EMPLOYEE' });
      setAccounts(list);
      // Tìm target user (mặc định Trần Hoàng Nam / hoangnam theo Figma Frame 1:1798)
      const target = targetId
        ? list.find((a) => a.id === targetId || a.username === targetId)
        : list.find((a) => a.username === 'hoangnam') || list[1] || list[0];
      setSelectedUser(target || null);
    } catch (err) {
      console.error(err);
      setErrorBanner('Không thể tải danh sách tài khoản do lỗi hệ thống.');
    } finally {
      setIsLoading(false);
    }
  }, [currentRole, targetId]);

  useEffect(() => {
    if (currentRole === 'OWNER') {
      loadData();
    }
  }, [currentRole, loadData]);

  const handleConfirmDisable = async () => {
    if (!selectedUser) return;
    try {
      await disableAccount(selectedUser.id);
      setIsConfirmOpen(false);
      setIsSuccess(true);
      setErrorBanner(null);
      await loadData();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setErrorBanner('Không thể lưu dữ liệu do lỗi hệ thống. Vui lòng thử lại.');
      console.error(msg);
    }
  };

  const handleCloseModal = () => {
    setIsConfirmOpen(false);
    router.push('/accounts');
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
      data-node-id={
        errorBanner
          ? '1:2020'
          : isSuccess
          ? '1:1914'
          : preview === 'cancel_hover'
          ? '1:2142'
          : isConfirmOpen
          ? '1:1798'
          : '1:2256'
      }
      data-name={
        errorBanner
          ? '32 · Vô hiệu hóa · Lỗi lưu'
          : isSuccess
          ? '31 · Vô hiệu hóa · Thành công'
          : preview === 'cancel_hover'
          ? 'Vô hiệu hóa · Trước khi chọn Hủy bỏ'
          : isConfirmOpen
          ? '30 · Vô hiệu hóa · Xác nhận'
          : 'Vô hiệu hóa · Sau khi Hủy bỏ'
      }
    >
      {/* Tiêu đề màn hình: "Vô hiệu hóa tài khoản" */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[22px] font-bold leading-[28px] text-[#0f172a]">
          Vô hiệu hóa tài khoản
        </h1>
      </div>

      {/* Thông báo lỗi lưu hệ thống: Khớp Frame 1:2020 */}
      {errorBanner && (
        <div
          className="bg-[#fee2e2] flex gap-[8px] items-start p-[12px] rounded-[8px] shrink-0 w-full"
          data-node-id="1:2070"
          role="alert"
        >
          <img alt="Lỗi" className="size-[16px] shrink-0 mt-0.5" src="/assets/alert-circle.svg" />
          <p className="text-[13px] leading-[20px] text-[#b91c1c] font-normal">
            {errorBanner}
          </p>
        </div>
      )}

      {/* Thông báo thành công: Khớp Frame 1:1914 */}
      {isSuccess && !errorBanner && (
        <div
          className="bg-[#f0fdf4] flex gap-[8px] items-start p-[12px] rounded-[8px] shrink-0 w-full"
          data-node-id="1:1964"
          role="alert"
        >
          <img alt="Thành công" className="size-[16px] shrink-0 mt-0.5" src="/assets/alert-circle.svg" />
          <p className="text-[13px] leading-[20px] text-[#15803d] font-normal" data-node-id="1:1967">
            Vô hiệu hóa tài khoản thành công.
          </p>
        </div>
      )}

      {/* Bảng Danh sách nhân viên */}
      <div
        className="bg-white border border-[#e2e8f0] rounded-[12px] overflow-hidden shadow-xs w-full"
        data-node-id="1:1968"
      >
        <div className="px-[20px] py-[16px]">
          <h2 className="text-[16px] font-semibold leading-[24px] text-[#0f172a]" data-node-id="1:1970">
            Danh sách nhân viên
          </h2>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] text-[10px] font-semibold text-[#64748b] leading-[15px]" data-node-id="1:1971">
                <th className="px-[20px] py-[10px] font-semibold">HỌ TÊN</th>
                <th className="px-[20px] py-[10px] font-semibold w-[160px]">TÊN ĐĂNG NHẬP</th>
                <th className="px-[20px] py-[10px] font-semibold w-[160px]">SỐ ĐIỆN THOẠI</th>
                <th className="px-[20px] py-[10px] font-semibold w-[110px]">VAI TRÒ</th>
                <th className="px-[20px] py-[10px] font-semibold w-[160px]">TRẠNG THÁI</th>
                <th className="px-[20px] py-[10px] font-semibold w-[192px]">THAO TÁC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-[20px] py-[24px] text-center text-xs text-[#64748b]">
                    Đang tải danh sách nhân viên...
                  </td>
                </tr>
              ) : accounts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-[20px] py-[24px] text-center text-xs text-[#64748b]">
                    Chưa có nhân viên nào trong hệ thống.
                  </td>
                </tr>
              ) : (
                accounts.map((acc) => {
                  const isAccActive = acc.status === 'ACTIVE';
                  return (
                    <tr key={acc.id} className="hover:bg-[#f8fafc]/50 transition-colors">
                      <td className="px-[20px] py-[16px] text-[12px] text-[#0f172a] font-normal">
                        {acc.name}
                      </td>
                      <td className="px-[20px] py-[16px] text-[12px] text-[#0f172a] font-normal w-[160px]">
                        {acc.username}
                      </td>
                      <td className="px-[20px] py-[16px] text-[12px] text-[#0f172a] font-normal w-[160px]">
                        {acc.phone}
                      </td>
                      <td className="px-[20px] py-[16px] text-[12px] text-[#0f172a] font-normal w-[110px]">
                        Nhân viên
                      </td>
                      <td className="px-[20px] py-[16px] w-[160px]">
                        <span
                          className={`px-[9px] py-[4px] rounded-[6px] text-[11px] font-medium inline-block whitespace-nowrap ${
                            isAccActive
                              ? 'bg-[#eff6ff] text-[#2563eb]'
                              : 'bg-[#fee2e2] text-[#ef4444]'
                          }`}
                        >
                          {isAccActive ? 'Hoạt động' : 'Đã vô hiệu hóa'}
                        </span>
                      </td>
                      <td className="px-[20px] py-[16px] text-[12px] font-medium w-[192px] whitespace-nowrap">
                        <div className="flex items-center gap-[16px]">
                          <button
                            type="button"
                            onClick={() => router.push(`/accounts/edit?id=${acc.id}`)}
                            className="text-[#2563eb] hover:underline cursor-pointer"
                          >
                            Chỉnh sửa
                          </button>
                          {isAccActive && (
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedUser(acc);
                                setIsConfirmOpen(true);
                              }}
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

        {/* Mobile List View */}
        <div className="md:hidden divide-y divide-[#e2e8f0]">
          {accounts.map((acc) => {
            const isAccActive = acc.status === 'ACTIVE';
            return (
              <div key={acc.id} className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-[#0f172a]">{acc.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                      isAccActive ? 'bg-[#eff6ff] text-[#2563eb]' : 'bg-[#fee2e2] text-[#ef4444]'
                    }`}
                  >
                    {isAccActive ? 'Hoạt động' : 'Đã vô hiệu hóa'}
                  </span>
                </div>
                <div className="text-[11px] text-[#64748b] flex flex-col gap-0.5">
                  <div>Tên đăng nhập: <span className="text-[#0f172a]">{acc.username}</span></div>
                  <div>SĐT: <span className="text-[#0f172a]">{acc.phone}</span></div>
                  <div>Vai trò: <span className="text-[#0f172a]">Nhân viên</span></div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => router.push(`/accounts/edit?id=${acc.id}`)}
                    className="text-xs text-[#2563eb] font-medium"
                  >
                    Chỉnh sửa
                  </button>
                  {isAccActive && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedUser(acc);
                        setIsConfirmOpen(true);
                      }}
                      className="text-xs text-[#ef4444] font-medium"
                    >
                      Vô hiệu hóa
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal xác nhận vô hiệu hóa (Node 1:1798 / 1:2142) */}
      <DisableConfirmModal
        isOpen={isConfirmOpen}
        user={selectedUser}
        preview={preview}
        onClose={handleCloseModal}
        onSuccess={() => {
          setIsConfirmOpen(false);
          setIsSuccess(true);
          setErrorBanner(null);
          loadData();
        }}
      />
    </div>
  );
}
