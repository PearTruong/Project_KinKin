/**
 * MOCK ADAPTER CHO GAP-02: Quản lý danh mục sản phẩm (Lane 3 · UC_7.1–7.3)
 *
 * Nguồn hợp đồng: docs/API_GAPS.md (GAP-02), docs/CONTRACTS.md
 * Figma Frames:
 * - 1:30676: Danh sách danh mục (Hình 120, Bảng 145)
 * - 1:30870: Thêm danh mục mới (Hình 121, Bảng 146)
 * - 1:31075: Thêm danh mục · Lỗi trống tên
 * - 1:31281: Thêm danh mục · Lỗi trùng tên
 * - 1:31487: Thêm danh mục · Lỗi lưu dữ liệu
 * - 1:31696: Thêm danh mục · Thành công
 * - 1:31908: Xóa danh mục · Xác nhận (Hình 122, Bảng 147)
 * - 1:32110: Xóa danh mục · Lỗi còn sản phẩm
 * - 1:32307: Xóa danh mục · Lỗi không tồn tại
 * - 1:32490: Xóa danh mục · Lỗi xóa dữ liệu
 * - 1:32687: Xóa danh mục · Thành công
 * - 1:32871: Sửa danh mục · Form (Hình 123, Bảng 148)
 * - 1:33080: Sửa danh mục · Tên không thay đổi
 * - 1:33277: Sửa danh mục · Lỗi trống tên
 * - 1:33487: Sửa danh mục · Lỗi trùng tên
 * - 1:33697: Sửa danh mục · Lỗi cập nhật dữ liệu
 * - 1:33910: Sửa danh mục · Thành công
 */

export interface Category {
  id: string;
  code: string;
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
  productCount: number;
  createdAt: string;
}

export interface CreateCategoryInput {
  name: string;
}

export interface UpdateCategoryInput {
  name: string;
}

export class CategoryValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CategoryValidationError';
  }
}

export class CategoryIntegrityError extends Error {
  categoryName: string;
  productCount: number;

  constructor(categoryName: string, productCount: number) {
    super(
      `Không thể xoá! danh mục '${categoryName}' đang có ${productCount} sản phẩm. Vui lòng chuyển hoặc xoá hết sản phẩm trước.`
    );
    this.name = 'CategoryIntegrityError';
    this.categoryName = categoryName;
    this.productCount = productCount;
  }
}

export class CategoryUnchangedError extends Error {
  constructor() {
    super('Tên danh mục không có thay đổi.');
    this.name = 'CategoryUnchangedError';
  }
}

export const CATEGORIES_STORAGE_KEY = 'kinkin_mock_categories_v1';

/**
 * Fixture chuẩn ban đầu theo Figma Frame 1:30676
 * 9 danh mục gốc (NH-0009 đến NH-0001)
 */
export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'cat_0009',
    code: 'NH-0009',
    name: 'Chai xịt',
    status: 'ACTIVE',
    productCount: 2,
    createdAt: '2026-11-01T08:00:00.000Z',
  },
  {
    id: 'cat_0008',
    code: 'NH-0008',
    name: 'Thun giày',
    status: 'ACTIVE',
    productCount: 0,
    createdAt: '2026-11-01T08:01:00.000Z',
  },
  {
    id: 'cat_0007',
    code: 'NH-0007',
    name: 'Đinh',
    status: 'ACTIVE',
    productCount: 0,
    createdAt: '2026-11-01T08:02:00.000Z',
  },
  {
    id: 'cat_0006',
    code: 'NH-0006',
    name: 'Đế giày',
    status: 'ACTIVE',
    productCount: 4, // Có sản phẩm -> kiểm tra ràng buộc xóa
    createdAt: '2026-11-01T08:03:00.000Z',
  },
  {
    id: 'cat_0005',
    code: 'NH-0005',
    name: 'Keo',
    status: 'ACTIVE',
    productCount: 3,
    createdAt: '2026-11-01T08:04:00.000Z',
  },
  {
    id: 'cat_0004',
    code: 'NH-0004',
    name: 'Pho',
    status: 'ACTIVE',
    productCount: 1,
    createdAt: '2026-11-01T08:05:00.000Z',
  },
  {
    id: 'cat_0003',
    code: 'NH-0003',
    name: 'Vải lót',
    status: 'ACTIVE',
    productCount: 2,
    createdAt: '2026-11-01T08:06:00.000Z',
  },
  {
    id: 'cat_0002',
    code: 'NH-0002',
    name: 'Lót cao su non',
    status: 'ACTIVE',
    productCount: 3,
    createdAt: '2026-11-01T08:07:00.000Z',
  },
  {
    id: 'cat_0001',
    code: 'NH-0001',
    name: 'Lót da',
    status: 'ACTIVE',
    productCount: 5,
    createdAt: '2026-11-01T08:08:00.000Z',
  },
];

/**
 * Đọc danh sách danh mục từ LocalStorage hoặc Fixture gốc
 */
export function getStoredCategories(): Category[] {
  if (typeof window === 'undefined') {
    return [...INITIAL_CATEGORIES];
  }
  const raw = localStorage.getItem(CATEGORIES_STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(INITIAL_CATEGORIES));
    return [...INITIAL_CATEGORIES];
  }
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return [...INITIAL_CATEGORIES];
  } catch {
    return [...INITIAL_CATEGORIES];
  }
}

/**
 * Lưu danh sách danh mục vào LocalStorage
 */
export function saveStoredCategories(categories: Category[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(categories));
}

/**
 * Tự động sinh mã danh mục duy nhất theo định dạng NH-XXXX (BR05)
 */
export function generateNextCategoryCode(existing: Category[]): string {
  let maxNumber = 0;
  for (const cat of existing) {
    const match = cat.code.match(/^NH-(\d+)$/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num) && num > maxNumber) {
        maxNumber = num;
      }
    }
  }
  const nextNumber = maxNumber + 1;
  return `NH-${String(nextNumber).padStart(4, '0')}`;
}

/**
 * Lấy danh sách danh mục
 */
export async function listCategories(search?: string): Promise<Category[]> {
  const all = getStoredCategories();
  if (!search || !search.trim()) {
    return all;
  }
  const query = search.trim().toLowerCase();
  return all.filter(
    (c) => c.name.toLowerCase().includes(query) || c.code.toLowerCase().includes(query)
  );
}

/**
 * Thêm danh mục mới (UC_7.1)
 */
export async function createCategory(input: CreateCategoryInput): Promise<Category> {
  const trimmedName = input.name.trim();

  // 1. Kiểm tra trống tên
  if (!trimmedName) {
    throw new CategoryValidationError('Tên danh mục không được để trống');
  }

  // 2. Kiểm tra độ dài tối đa 100 ký tự (BR04)
  if (trimmedName.length > 100) {
    throw new CategoryValidationError('Tên danh mục không được vượt quá 100 ký tự');
  }

  const existing = getStoredCategories();

  // 3. Kiểm tra trùng tên không phân biệt hoa/thường (BR03)
  const isDuplicate = existing.some(
    (c) => c.name.toLowerCase() === trimmedName.toLowerCase()
  );
  if (isDuplicate) {
    throw new CategoryValidationError('Tên danh mục đã tồn tại, vui lòng nhập tên khác');
  }

  // 4. Sinh mã tự động
  const newCode = generateNextCategoryCode(existing);
  const newCategory: Category = {
    id: `cat_${Date.now()}`,
    code: newCode,
    name: trimmedName,
    status: 'ACTIVE',
    productCount: 0,
    createdAt: new Date().toISOString(),
  };

  // 5. Thêm vào đầu danh sách (theo bước 7 của Main flow)
  const updated = [newCategory, ...existing];
  saveStoredCategories(updated);

  return newCategory;
}

/**
 * Sửa danh mục (UC_7.3)
 */
export async function updateCategory(id: string, input: UpdateCategoryInput): Promise<Category> {
  const trimmedName = input.name.trim();
  const existing = getStoredCategories();

  const targetIndex = existing.findIndex((c) => c.id === id || c.code === id);
  if (targetIndex === -1) {
    throw new CategoryValidationError('danh mục không tồn tại hoặc đã bị xóa!');
  }

  const currentCategory = existing[targetIndex];

  // 1. Bỏ trống trường tên danh mục (Ngoại lệ 4a)
  if (!trimmedName) {
    throw new CategoryValidationError('Tên danh mục không được để trống');
  }

  // 2. Kiểm tra độ dài tối đa 100 ký tự
  if (trimmedName.length > 100) {
    throw new CategoryValidationError('Tên danh mục không được vượt quá 100 ký tự');
  }

  // 3. Không thay đổi tên (Luồng nhánh 3a)
  if (trimmedName.toLowerCase() === currentCategory.name.toLowerCase()) {
    throw new CategoryUnchangedError();
  }

  // 4. Tên trùng với danh mục khác (Ngoại lệ 5a)
  const isDuplicate = existing.some(
    (c, idx) => idx !== targetIndex && c.name.toLowerCase() === trimmedName.toLowerCase()
  );
  if (isDuplicate) {
    throw new CategoryValidationError('Tên danh mục đã tồn tại, vui lòng nhập tên khác');
  }

  // 5. Cập nhật thông tin (mã maDM giữ nguyên theo BR05)
  const updatedCategory: Category = {
    ...currentCategory,
    name: trimmedName,
  };

  existing[targetIndex] = updatedCategory;
  saveStoredCategories(existing);

  return updatedCategory;
}

/**
 * Xóa danh mục (UC_7.2)
 */
export async function deleteCategory(id: string): Promise<{ success: boolean; deletedCategory: Category }> {
  const existing = getStoredCategories();

  const target = existing.find((c) => c.id === id || c.code === id);
  if (!target) {
    throw new CategoryValidationError('danh mục không tồn tại hoặc đã bị xóa!');
  }

  // Kiểm tra ràng buộc toàn vẹn: danh mục còn sản phẩm (Ngoại lệ 4a, BR02, BR05)
  if (target.productCount > 0) {
    throw new CategoryIntegrityError(target.name, target.productCount);
  }

  const filtered = existing.filter((c) => c.id !== target.id);
  saveStoredCategories(filtered);

  return { success: true, deletedCategory: target };
}

/**
 * Reset lại dữ liệu mock về 9 danh mục ban đầu
 */
export function resetMockCategories(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(INITIAL_CATEGORIES));
}
