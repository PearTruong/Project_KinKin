/**
 * MOCK ADAPTER CHO GAP-01: Quản lý tài khoản & Đổi mật khẩu (Lane 2 · UC_6.1–6.4)
 *
 * Nguồn hợp đồng: docs/API_GAPS.md (GAP-01), docs/CONTRACTS.md
 * Các màn hình phụ thuộc:
 * - UC_6.1: Đổi mật khẩu (Hình 107, 108, 109, 110; Bảng 132, 134, 135)
 * - UC_6.2: Sửa thông tin tài khoản (Hình 111, 112; Bảng 136, 137)
 * - UC_6.3: Tạo tài khoản mới (Hình 114, 115, 116; Bảng 139, 140, 141)
 * - UC_6.4: Danh sách nhân viên & Vô hiệu hóa (Hình 113, 117, 118, 119; Bảng 138, 142, 143, 144)
 */

export interface AccountUser {
  id: string;
  username: string;
  name: string;
  phone: string;
  role: 'OWNER' | 'EMPLOYEE';
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
}

export interface CreateAccountInput {
  username: string;
  name: string;
  phone: string;
  password: string;
  role: 'OWNER' | 'EMPLOYEE';
}

export interface UpdateAccountInput {
  name: string;
  phone: string;
  role: 'OWNER' | 'EMPLOYEE';
}

export interface ChangePasswordInput {
  oldPassword?: string;
  newPassword: string;
  confirmPassword: string;
}

const STORAGE_KEY = 'kinkin_mock_accounts_v3';

/**
 * Fixture chuẩn ban đầu theo Figma Frame 1:4196 (Đúng 3 nhân viên + 1 chủ cửa hàng)
 */
export const INITIAL_3_EMPLOYEES: AccountUser[] = [
  {
    id: 'usr_admin',
    username: 'admin',
    name: 'Mai Linh',
    phone: '0901234560',
    role: 'OWNER',
    status: 'ACTIVE',
    createdAt: '2026-11-01T08:00:00.000Z',
  },
  {
    id: 'usr_emp_01',
    username: 'minhanh',
    name: 'Nguyễn Minh Anh',
    phone: '0901234567',
    role: 'EMPLOYEE',
    status: 'ACTIVE',
    createdAt: '2026-11-05T09:30:00.000Z',
  },
  {
    id: 'usr_emp_02',
    username: 'hoangnam',
    name: 'Trần Hoàng Nam',
    phone: '0912345678',
    role: 'EMPLOYEE',
    status: 'ACTIVE',
    createdAt: '2026-11-08T14:15:00.000Z',
  },
  {
    id: 'usr_emp_03',
    username: 'ngocanh',
    name: 'Lê Ngọc Anh',
    phone: '0987654321',
    role: 'EMPLOYEE',
    status: 'INACTIVE',
    createdAt: '2026-11-09T10:00:00.000Z',
  },
];

/**
 * Nhân viên thứ tư được thêm vào sau luồng tạo thành công (Frame 1:3892)
 */
export const THUHA_ACCOUNT: AccountUser = {
  id: 'usr_emp_04',
  username: 'thuha',
  name: 'Phạm Thu Hà',
  phone: '0934567890',
  role: 'EMPLOYEE',
  status: 'ACTIVE',
  createdAt: '2026-11-09T15:00:00.000Z',
};

let memoryAccounts: AccountUser[] = [...INITIAL_3_EMPLOYEES];
export const PASSWORDS_STORAGE_KEY = 'kinkin_mock_user_passwords_v1';
let memoryPasswords: Record<string, string> = {};

function loadAccounts(): AccountUser[] {
  if (typeof window === 'undefined') return memoryAccounts;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_3_EMPLOYEES));
      return INITIAL_3_EMPLOYEES;
    }
    return JSON.parse(raw) as AccountUser[];
  } catch {
    return INITIAL_3_EMPLOYEES;
  }
}

function saveAccounts(accounts: AccountUser[]) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
    } catch (err) {
      console.error('Failed to save mock accounts to localStorage', err);
    }
  } else {
    memoryAccounts = [...accounts];
  }
}

export function loadPasswords(): Record<string, string> {
  if (typeof window === 'undefined') return memoryPasswords;
  try {
    const raw = localStorage.getItem(PASSWORDS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function savePasswords(passwords: Record<string, string>) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(PASSWORDS_STORAGE_KEY, JSON.stringify(passwords));
    } catch (err) {
      console.error('Failed to save mock passwords to localStorage', err);
    }
  } else {
    memoryPasswords = { ...passwords };
  }
}

/**
 * Thiết lập trạng thái fixture tách biệt theo từng kịch bản
 */
export function setFixtureState(state: 'initial' | 'with_thuha' | 'disabled_hoangnam'): void {
  if (state === 'initial') {
    saveAccounts([...INITIAL_3_EMPLOYEES]);
  } else if (state === 'with_thuha') {
    saveAccounts([...INITIAL_3_EMPLOYEES, { ...THUHA_ACCOUNT }]);
  } else if (state === 'disabled_hoangnam') {
    const list = [...INITIAL_3_EMPLOYEES, { ...THUHA_ACCOUNT }];
    const nam = list.find((u) => u.username === 'hoangnam');
    if (nam) nam.status = 'INACTIVE';
    saveAccounts(list);
  }
}

/**
 * Lấy danh sách nhân viên (GAP-01.2: GET /api/users)
 */
export async function getAccounts(params?: {
  search?: string;
  status?: string;
  role?: string;
  fixture?: 'initial' | 'with_thuha' | 'disabled_hoangnam';
}): Promise<AccountUser[]> {
  await new Promise((resolve) => setTimeout(resolve, 60));

  if (params?.fixture) {
    setFixtureState(params.fixture);
  }

  let list = loadAccounts();

  if (params?.search) {
    const s = params.search.trim().toLowerCase();
    list = list.filter(
      (acc) =>
        acc.name.toLowerCase().includes(s) ||
        acc.username.toLowerCase().includes(s) ||
        acc.phone.includes(s)
    );
  }

  if (params?.status && params.status !== 'ALL') {
    list = list.filter((acc) => acc.status === params.status);
  }

  if (params?.role && params.role !== 'ALL') {
    list = list.filter((acc) => acc.role === params.role);
  } else if (!params?.role) {
    // Mặc định danh sách nhân viên theo Figma Final (Frame 1:4196)
    list = list.filter((acc) => acc.role === 'EMPLOYEE');
  }

  return list;
}

/**
 * Lấy chi tiết tài khoản theo ID
 */
export async function getAccountById(id: string): Promise<AccountUser | null> {
  const list = loadAccounts();
  return list.find((a) => a.id === id) || null;
}

/**
 * Tạo tài khoản nhân viên mới (GAP-01.3: POST /api/users)
 */
export async function createAccount(input: CreateAccountInput): Promise<AccountUser> {
  await new Promise((resolve) => setTimeout(resolve, 80));
  const list = loadAccounts();

  // Validate trùng username
  const existingUsername = list.find(
    (a) => a.username.toLowerCase() === input.username.trim().toLowerCase()
  );
  if (existingUsername) {
    throw new Error('Tên đăng nhập đã tồn tại.');
  }

  // Validate trùng số điện thoại
  const existingPhone = list.find(
    (a) => a.phone === input.phone.trim()
  );
  if (existingPhone) {
    throw new Error('Số điện thoại đã được sử dụng.');
  }

  // Validate format SĐT (10 số, bắt đầu 0)
  if (!/^0\d{9}$/.test(input.phone.trim())) {
    throw new Error('Số điện thoại phải gồm 10 chữ số, bắt đầu bằng 0.');
  }

  // Validate độ dài mật khẩu (ít nhất 8 ký tự, không chỉ gồm khoảng trắng theo BR6-13)
  if (input.password.trim().length < 8) {
    throw new Error('Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.');
  }

  const newAccount: AccountUser = {
    id: `usr_${Date.now()}`,
    username: input.username.trim().toLowerCase(),
    name: input.name.trim(),
    phone: input.phone.trim(),
    role: input.role,
    status: 'ACTIVE',
    createdAt: new Date().toISOString(),
  };

  list.push(newAccount);
  saveAccounts(list);

  // Lưu mật khẩu ban đầu vào mock password storage, gắn với ID và username của tài khoản mới
  const passwords = loadPasswords();
  passwords[newAccount.id] = input.password;
  passwords[newAccount.username] = input.password;
  savePasswords(passwords);

  return newAccount;
}

/**
 * Sửa thông tin tài khoản (GAP-01: PATCH /api/users/:id)
 */
export async function updateAccount(
  id: string,
  input: UpdateAccountInput
): Promise<AccountUser> {
  await new Promise((resolve) => setTimeout(resolve, 80));
  const list = loadAccounts();
  const index = list.findIndex((a) => a.id === id);
  if (index === -1) {
    throw new Error('Không tìm thấy tài khoản nhân viên.');
  }

  // Validate SĐT format
  if (!/^0\d{9}$/.test(input.phone.trim())) {
    throw new Error('Số điện thoại phải gồm 10 chữ số, bắt đầu bằng 0.');
  }

  // Validate trùng SĐT với người khác
  const phoneConflict = list.find(
    (a) => a.id !== id && a.phone === input.phone.trim()
  );
  if (phoneConflict) {
    throw new Error('Số điện thoại đã được sử dụng.');
  }

  const updated: AccountUser = {
    ...list[index],
    name: input.name.trim(),
    phone: input.phone.trim(),
    role: input.role,
  };

  list[index] = updated;
  saveAccounts(list);
  return updated;
}

/**
 * Vô hiệu hóa tài khoản (GAP-01.4: PATCH /api/users/:id/status)
 */
export async function disableAccount(id: string): Promise<AccountUser> {
  await new Promise((resolve) => setTimeout(resolve, 80));
  const list = loadAccounts();
  const index = list.findIndex((a) => a.id === id);
  if (index === -1) {
    throw new Error('Không tìm thấy tài khoản nhân viên.');
  }

  if (list[index].username === 'admin') {
    throw new Error('Không thể vô hiệu hóa tài khoản quản trị hệ thống gốc.');
  }

  const updated: AccountUser = {
    ...list[index],
    status: 'INACTIVE',
  };

  list[index] = updated;
  saveAccounts(list);
  return updated;
}

/**
 * Đổi mật khẩu cá nhân hoặc nhân viên (GAP-01.1: PATCH /api/users/:id/password)
 */
export async function changePassword(
  userId: string,
  input: ChangePasswordInput,
  isSelf: boolean = true
): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 80));

  if (isSelf) {
    if (!input.oldPassword?.trim()) {
      throw new Error('Vui lòng nhập mật khẩu hiện tại.');
    }
    const passwords = loadPasswords();
    const list = loadAccounts();
    const user = list.find((a) => a.id === userId || a.username === userId);
    const stored =
      passwords[userId] ||
      (user ? passwords[user.id] || passwords[user.username] : undefined) ||
      '123456';

    // Mật khẩu khởi tạo ban đầu cho seed accounts là '123456' (hoặc fallback '12345678')
    const isOldMatch =
      input.oldPassword === stored ||
      (stored === '123456' && input.oldPassword === '12345678');
    if (!isOldMatch) {
      throw new Error('Mật khẩu hiện tại không đúng, vui lòng nhập lại.');
    }
  }

  if (input.newPassword.trim().length < 8) {
    throw new Error('Mật khẩu phải có ít nhất 8 ký tự, không chỉ gồm khoảng trắng.');
  }

  if (isSelf && input.oldPassword && input.newPassword.trim() === input.oldPassword.trim()) {
    throw new Error('Mật khẩu mới phải khác mật khẩu hiện tại.');
  }

  if (input.newPassword !== input.confirmPassword) {
    throw new Error('Mật khẩu mới không trùng khớp, vui lòng nhập lại.');
  }

  // Lưu mật khẩu mới vào mock storage để các lần submit sau kiểm tra đúng
  const passwords = loadPasswords();
  passwords[userId] = input.newPassword;
  const list = loadAccounts();
  const user = list.find((a) => a.id === userId || a.username === userId);
  if (user) {
    passwords[user.id] = input.newPassword;
    passwords[user.username] = input.newPassword;
  }
  savePasswords(passwords);

  return {
    success: true,
    message: 'Đổi mật khẩu thành công.',
  };
}

/**
 * Reset mock data về ban đầu
 */
export function resetMockAccounts(): void {
  saveAccounts([...INITIAL_3_EMPLOYEES]);
  memoryPasswords = {};
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(PASSWORDS_STORAGE_KEY);
    } catch {
      // ignore
    }
  }
}
