'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Category,
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  CategoryValidationError,
  CategoryIntegrityError,
  CategoryUnchangedError,
  INITIAL_CATEGORIES,
  getStoredCategories,
  saveStoredCategories,
} from '@/lib/categories-adapter';
import { CategoryPreviewState, CategoryNotification } from './category-types';
import { CategoryAddModal } from './category-add-modal';
import { CategoryEditModal } from './category-edit-modal';
import { CategoryDeleteConfirmModal } from './category-delete-confirm-modal';
import { CategoryToast } from './category-toast';
import { CategoryWarningBanner } from './category-warning-banner';

export interface CategoriesListViewProps {
  currentRole?: string;
  previewState?: CategoryPreviewState;
}

export function CategoriesListView({
  currentRole = 'OWNER',
  previewState: propPreviewState,
}: CategoriesListViewProps) {
  const searchParams = useSearchParams();
  const previewParam = (searchParams?.get('preview') as CategoryPreviewState) ?? propPreviewState;

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState<CategoryNotification | null>(null);
  const [warningBanner, setWarningBanner] = useState<{
    categoryName?: string;
    productCount?: number;
    customMessage?: string;
  } | null>(null);

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addModalInitialValue, setAddModalInitialValue] = useState('');
  const [addModalForcedError, setAddModalForcedError] = useState<string | undefined>();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editModalForcedName, setEditModalForcedName] = useState<string | undefined>();
  const [editModalForcedError, setEditModalForcedError] = useState<string | undefined>();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingCategory, setDeletingCategory] = useState<Category | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, startTransition] = useTransition();

  const isOwner = currentRole === 'OWNER';

  // Load categories and apply preview state
  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const data = await listCategories();

      if (previewParam) {
        applyPreviewState(previewParam, data);
      } else {
        setCategories(data);
      }
      setIsLoading(false);
    }

    loadData();
  }, [previewParam]);

  // Handle deterministic preview states matching all 17 Figma frames
  const applyPreviewState = (state: CategoryPreviewState, baseData: Category[]) => {
    // Reset any open modals/notices
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setNotification(null);
    setWarningBanner(null);

    const deGiayCat = baseData.find((c) => c.code === 'NH-0006') || {
      id: 'cat_0006',
      code: 'NH-0006',
      name: 'Đế giày',
      status: 'ACTIVE',
      productCount: 4,
      createdAt: '2026-11-01T08:03:00.000Z',
    };

    switch (state) {
      case 'initial': // 1:30676
        setCategories(baseData);
        break;

      case 'add_modal': // 1:30870
        setCategories(baseData);
        setAddModalInitialValue('');
        setAddModalForcedError(undefined);
        setIsAddModalOpen(true);
        break;

      case 'add_empty_error': // 1:31075
        setCategories(baseData);
        setAddModalInitialValue('');
        setAddModalForcedError('Tên danh mục không được để trống');
        setIsAddModalOpen(true);
        break;

      case 'add_duplicate_error': // 1:31281
        setCategories(baseData);
        setAddModalInitialValue('dây giày');
        setAddModalForcedError('Tên danh mục đã tồn tại, vui lòng nhập tên khác');
        setIsAddModalOpen(true);
        break;

      case 'add_save_error': // 1:31487
        setCategories(baseData);
        setAddModalInitialValue('Dây giày mới');
        setAddModalForcedError(undefined);
        setIsAddModalOpen(true);
        setNotification({
          type: 'error',
          message: 'Không thể lưu dữ liệu, vui lòng thử lại',
        });
        break;

      case 'add_success': // 1:31696
        const addedCat: Category = {
          id: 'cat_0010',
          code: 'NH-0010',
          name: 'Đế TPU',
          status: 'ACTIVE',
          productCount: 0,
          createdAt: '2026-11-01T09:00:00.000Z',
        };
        setCategories([addedCat, ...baseData]);
        setNotification({
          type: 'success',
          message: 'Thêm danh mục thành công',
        });
        break;

      case 'delete_confirm': // 1:31908
        setCategories(baseData);
        setDeletingCategory(deGiayCat);
        setIsDeleteModalOpen(true);
        break;

      case 'delete_has_products_error': // 1:32110
        setCategories(baseData);
        setWarningBanner({
          categoryName: deGiayCat.name,
          productCount: deGiayCat.productCount,
          customMessage: `Không thể xoá! danh mục '[Tên danh mục]' đang có [X] sản phẩm. Vui lòng chuyển hoặc xoá hết sản phẩm trước.`,
        });
        break;

      case 'delete_not_found_error': // 1:32307
        setCategories(baseData);
        setNotification({
          type: 'error',
          message: 'danh mục không tồn tại hoặc đã bị xóa!',
        });
        break;

      case 'delete_error': // 1:32490
        setCategories(baseData);
        setNotification({
          type: 'error',
          message: 'Không thể xoá dữ liệu, vui lòng thử lại',
        });
        break;

      case 'delete_success': // 1:32687
        setCategories(baseData.filter((c) => c.code !== 'NH-0006'));
        setNotification({
          type: 'success',
          message: 'Xoá danh mục thành công!',
        });
        break;

      case 'edit_modal': // 1:32871
        setCategories(baseData);
        setEditingCategory(deGiayCat);
        setEditModalForcedName(deGiayCat.name);
        setEditModalForcedError(undefined);
        setIsEditModalOpen(true);
        break;

      case 'edit_unchanged_info': // 1:33080
        setCategories(baseData);
        setNotification({
          type: 'info',
          message: 'Tên danh mục không có thay đổi.',
        });
        break;

      case 'edit_empty_error': // 1:33277
        setCategories(baseData);
        setEditingCategory(deGiayCat);
        setEditModalForcedName('');
        setEditModalForcedError('Tên danh mục không được để trống');
        setIsEditModalOpen(true);
        break;

      case 'edit_duplicate_error': // 1:33487
        setCategories(baseData);
        setEditingCategory(deGiayCat);
        setEditModalForcedName('KEO');
        setEditModalForcedError('Tên danh mục đã tồn tại, vui lòng nhập tên khác');
        setIsEditModalOpen(true);
        break;

      case 'edit_save_error': // 1:33697
        setCategories(baseData);
        setEditingCategory(deGiayCat);
        setEditModalForcedName('Đế cao cấp');
        setEditModalForcedError(undefined);
        setIsEditModalOpen(true);
        setNotification({
          type: 'error',
          message: 'Không thể cập nhật dữ liệu, vui lòng thử lại',
        });
        break;

      case 'edit_success': // 1:33910
        setCategories(
          baseData.map((c) => (c.code === 'NH-0006' ? { ...c, name: 'Đế cao cấp' } : c))
        );
        setNotification({
          type: 'success',
          message: 'Cập nhật danh mục thành công',
        });
        break;

      default:
        setCategories(baseData);
        break;
    }
  };

  // Operations
  const handleOpenAdd = () => {
    if (!isOwner) return;
    setAddModalInitialValue('');
    setAddModalForcedError(undefined);
    setIsAddModalOpen(true);
    setWarningBanner(null);
  };

  const handleAddSubmit = async (name: string) => {
    setIsSubmitting(true);
    try {
      const created = await createCategory({ name });
      startTransition(() => {
        setCategories((prev) => [created, ...prev]);
        setIsAddModalOpen(false);
        setNotification({
          type: 'success',
          message: 'Thêm danh mục thành công',
        });
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenEdit = (category: Category) => {
    if (!isOwner) return;
    setEditingCategory(category);
    setEditModalForcedName(category.name);
    setEditModalForcedError(undefined);
    setIsEditModalOpen(true);
    setWarningBanner(null);
  };

  const handleEditSubmit = async (id: string, name: string) => {
    setIsSubmitting(true);
    try {
      const updated = await updateCategory(id, { name });
      startTransition(() => {
        setCategories((prev) => prev.map((c) => (c.id === id ? updated : c)));
        setIsEditModalOpen(false);
        setNotification({
          type: 'success',
          message: 'Cập nhật danh mục thành công',
        });
      });
    } catch (err: unknown) {
      if (err instanceof CategoryUnchangedError) {
        setIsEditModalOpen(false);
        setNotification({
          type: 'info',
          message: 'Tên danh mục không có thay đổi.',
        });
      } else {
        throw err;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenDelete = (category: Category) => {
    if (!isOwner) return;
    setDeletingCategory(category);
    setIsDeleteModalOpen(true);
    setWarningBanner(null);
  };

  const handleDeleteConfirm = async (category: Category) => {
    setIsSubmitting(true);
    try {
      await deleteCategory(category.id);
      startTransition(() => {
        setCategories((prev) => prev.filter((c) => c.id !== category.id));
        setIsDeleteModalOpen(false);
        setNotification({
          type: 'success',
          message: 'Xoá danh mục thành công!',
        });
      });
    } catch (err: unknown) {
      setIsDeleteModalOpen(false);
      if (err instanceof CategoryIntegrityError) {
        setWarningBanner({
          categoryName: err.categoryName,
          productCount: err.productCount,
        });
      } else if (err instanceof CategoryValidationError) {
        setNotification({
          type: 'error',
          message: err.message,
        });
      } else {
        setNotification({
          type: 'error',
          message: 'Không thể xoá dữ liệu, vui lòng thử lại',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Node ID mapping for visual QA container
  let containerNodeId = '1:30676';
  let containerName = '01 · Danh sách danh mục · Trạng thái gốc';
  if (previewParam) {
    const nodeMap: Record<CategoryPreviewState, { id: string; name: string }> = {
      initial: { id: '1:30676', name: '01 · Danh sách danh mục · Trạng thái gốc' },
      add_modal: { id: '1:30870', name: '02 · UC_7.1 · Thêm danh mục' },
      add_empty_error: { id: '1:31075', name: '03 · UC_7.1 · 3a · Tên để trống' },
      add_duplicate_error: { id: '1:31281', name: '04 · UC_7.1 · 4a · Tên đã tồn tại' },
      add_save_error: { id: '1:31487', name: '05 · UC_7.1 · 6a · Lỗi lưu dữ liệu' },
      add_success: { id: '1:31696', name: '06 · UC_7.1 · Thêm danh mục thành công' },
      delete_confirm: { id: '1:31908', name: '07 · UC_7.2 · Xác nhận xoá danh mục' },
      delete_has_products_error: {
        id: '1:32110',
        name: '08 · UC_7.2 · 4a · Từ chối xoá vì còn sản phẩm',
      },
      delete_not_found_error: {
        id: '1:32307',
        name: '09 · UC_7.2 · 4b · Danh mục không còn tồn tại',
      },
      delete_error: { id: '1:32490', name: '10 · UC_7.2 · 5a · Lỗi xoá dữ liệu' },
      delete_success: { id: '1:32687', name: '11 · UC_7.2 · Xoá danh mục thành công' },
      edit_modal: { id: '1:32871', name: '12 · UC_7.3 · Sửa danh mục' },
      edit_unchanged_info: { id: '1:33080', name: '13 · UC_7.3 · 3a · Tên không có thay đổi' },
      edit_empty_error: { id: '1:33277', name: '14 · UC_7.3 · 4a · Tên để trống' },
      edit_duplicate_error: {
        id: '1:33487',
        name: '15 · UC_7.3 · 5a · Tên trùng danh mục khác',
      },
      edit_save_error: { id: '1:33697', name: '16 · UC_7.3 · 6a · Lỗi cập nhật dữ liệu' },
      edit_success: { id: '1:33910', name: '17 · UC_7.3 · Cập nhật danh mục thành công' },
    };
    if (nodeMap[previewParam]) {
      containerNodeId = nodeMap[previewParam].id;
      containerName = nodeMap[previewParam].name;
    }
  }

  return (
    <div
      className="relative flex flex-col w-full min-h-[calc(100vh-72px)] bg-[#f8fafc] p-4 sm:p-6 lg:p-[32px]"
      data-node-id={containerNodeId}
      data-name={containerName}
    >
      {/* Toast Notification (Top-Right / Fixed overlay matching Figma) */}
      {notification && (
        <div className="fixed top-[88px] right-4 sm:right-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <CategoryToast
            notification={notification}
            onClose={() => setNotification(null)}
          />
        </div>
      )}

      {/* Header section (Figma 1:30730 & 1:30731) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1
            className="font-bold leading-[36px] text-[#0f172a] text-[24px]"
            data-node-id="1:30730"
            data-name="Tiêu đề quản lý nhóm hàng"
          >
            Quản lý danh mục
          </h1>
        </div>

        {/* Action Button "+ Thêm danh mục" */}
        {isOwner && (
          <button
            type="button"
            onClick={handleOpenAdd}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-[13px] leading-[20px] h-[40px] px-6 rounded-[8px] transition-colors focus:outline-none flex items-center justify-center shrink-0 self-start sm:self-auto shadow-sm"
            data-node-id="1:30731"
            data-name="Thêm nhóm hàng"
          >
            <span data-node-id="1:30732" data-name="Nhãn thêm nhóm hàng">
              + Thêm danh mục
            </span>
          </button>
        )}
      </div>

      {/* Warning banner when category has products upon delete attempt (Node 1:32167) */}
      {warningBanner && (
        <CategoryWarningBanner
          categoryName={warningBanner.categoryName}
          productCount={warningBanner.productCount}
          customMessage={warningBanner.customMessage}
          onClose={() => setWarningBanner(null)}
        />
      )}

      {/* Table Container (Node 1:30733) */}
      <div
        className="bg-white border border-[#e2e8f0] rounded-[12px] shadow-sm overflow-hidden w-full flex flex-col"
        data-node-id="1:30733"
        data-name="Bảng nhóm hàng"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            {/* Header row (Node 1:30734) */}
            <thead>
              <tr
                className="bg-[#f8fafc] border-b border-[#e2e8f0] h-[48px]"
                data-node-id="1:30734"
                data-name="Tiêu đề cột"
              >
                <th
                  className="px-6 font-semibold text-[#64748b] text-[12px] leading-[20px] w-[192px]"
                  data-node-id="1:30735"
                  data-name="Cột mã nhóm"
                >
                  <span data-node-id="1:30736">Mã danh mục</span>
                </th>
                <th
                  className="px-6 font-semibold text-[#64748b] text-[12px] leading-[20px] w-[424px]"
                  data-node-id="1:30737"
                  data-name="Cột tên nhóm"
                >
                  <span data-node-id="1:30738">Tên danh mục</span>
                </th>
                <th
                  className="px-6 font-semibold text-[#64748b] text-[12px] leading-[20px] w-[280px]"
                  data-node-id="1:30739"
                  data-name="Cột trạng thái"
                >
                  <span data-node-id="1:30740">Trạng thái</span>
                </th>
                <th
                  className="px-6 font-semibold text-[#64748b] text-[12px] leading-[20px] w-[208px]"
                  data-node-id="1:30741"
                  data-name="Cột thao tác"
                >
                  <span data-node-id="1:30742">Thao tác</span>
                </th>
              </tr>
            </thead>

            {/* Data rows */}
            <tbody className="divide-y divide-[#e2e8f0]">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-[#64748b] text-[13px]">
                    Đang tải danh mục...
                  </td>
                </tr>
              ) : categories.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-[#64748b] text-[13px]">
                    Chưa có danh mục nào được thiết lập.
                  </td>
                </tr>
              ) : (
                categories.map((cat) => (
                  <tr
                    key={cat.id}
                    className="h-[64px] hover:bg-[#f8fafc]/60 transition-colors"
                    data-node-id={`row-${cat.code}`}
                    data-name={`Nhóm ${cat.code}`}
                  >
                    {/* Mã danh mục */}
                    <td className="px-6">
                      <div
                        className="bg-[#f8fafc] border border-[#e2e8f0] h-[28px] w-[92px] rounded-[8px] flex items-center justify-center shrink-0"
                        data-name="Mã nhóm hàng · Read-only"
                      >
                        <span className="font-medium text-[#64748b] text-[12px] leading-[20px]">
                          {cat.code}
                        </span>
                      </div>
                    </td>

                    {/* Tên danh mục */}
                    <td className="px-6">
                      <span className="font-medium text-[#0f172a] text-[13px] leading-[20px]">
                        {cat.name}
                      </span>
                    </td>

                    {/* Trạng thái */}
                    <td className="px-6">
                      <div
                        className="bg-[#dcfce7] h-[28px] w-[144px] rounded-[8px] flex items-center justify-center shrink-0"
                        data-name="Đang hoạt động"
                      >
                        <span className="font-medium text-[#15803d] text-[12px] leading-[20px]">
                          {cat.status === 'ACTIVE' ? 'Đang hoạt động' : 'Tạm dừng'}
                        </span>
                      </div>
                    </td>

                    {/* Thao tác */}
                    <td className="px-6">
                      {isOwner ? (
                        <div className="flex items-center gap-[12px]" data-name="Thao tác nhóm hàng">
                          <button
                            type="button"
                            onClick={() => handleOpenEdit(cat)}
                            className="text-[#2563eb] hover:text-[#1d4ed8] font-medium text-[13px] leading-[20px] focus:outline-none hover:underline"
                            data-name="Sửa"
                          >
                            Sửa
                          </button>
                          <button
                            type="button"
                            onClick={() => handleOpenDelete(cat)}
                            className="text-[#dc2626] hover:text-[#b91c1c] font-medium text-[13px] leading-[20px] focus:outline-none hover:underline"
                            data-name="Xoá"
                          >
                            Xoá
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-[#94a3b8] italic">Chỉ xem</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Category Modal */}
      <CategoryAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        initialValue={addModalInitialValue}
        forcedError={addModalForcedError}
        isSubmitting={isSubmitting}
      />

      {/* Edit Category Modal */}
      <CategoryEditModal
        isOpen={isEditModalOpen}
        category={editingCategory}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        forcedName={editModalForcedName}
        forcedError={editModalForcedError}
        isSubmitting={isSubmitting}
      />

      {/* Delete Category Confirm Modal */}
      <CategoryDeleteConfirmModal
        isOpen={isDeleteModalOpen}
        category={deletingCategory}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
