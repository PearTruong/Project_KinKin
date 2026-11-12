export type Role = 'OWNER' | 'EMPLOYEE';

export type MenuItem = {
  key: string;
  label: string;
  iconSrc?: string;
  path?: string;
  roles: Role[];
  children?: MenuItem[];
  isPlaceholder?: boolean;
  isAction?: boolean;
};

export const APP_MENU_ITEMS: MenuItem[] = [
  {
    key: 'sales',
    label: 'Quản lý bán hàng',
    iconSrc: '/assets/cart.svg',
    roles: ['OWNER', 'EMPLOYEE'],
    children: [
      {
        key: 'orders-create',
        label: 'Tạo hóa đơn',
        path: '/orders',
        roles: ['OWNER', 'EMPLOYEE'],
      },
      {
        key: 'orders-lookup',
        label: 'Tra cứu hóa đơn',
        path: '/orders/lookup',
        roles: ['OWNER'],
      },
    ],
  },
  {
    key: 'returns',
    label: 'Quản lý đổi trả',
    iconSrc: '/assets/refresh.svg',
    roles: ['OWNER', 'EMPLOYEE'],
    children: [
      {
        key: 'returns-exchange',
        label: 'Đổi hàng',
        path: '/returns/exchange',
        roles: ['OWNER', 'EMPLOYEE'],
      },
      {
        key: 'returns-refund',
        label: 'Trả hàng',
        path: '/returns/refund',
        roles: ['OWNER', 'EMPLOYEE'],
      },
    ],
  },
  {
    key: 'inventory',
    label: 'Quản lý tồn kho',
    iconSrc: '/assets/boxes.svg',
    roles: ['OWNER'],
    children: [
      {
        key: 'inventory-lookup',
        label: 'Tra cứu tồn kho',
        path: '/inventory',
        roles: ['OWNER'],
      },
      {
        key: 'inventory-adjust',
        label: 'Điều chỉnh số tồn',
        path: '/inventory/adjust',
        roles: ['OWNER'],
      },
      {
        key: 'inventory-alerts',
        label: 'Xem cảnh báo tồn kho',
        path: '/inventory/alerts',
        roles: ['OWNER'],
      },
      {
        key: 'inventory-history',
        label: 'Lịch sử điều chỉnh',
        path: '/inventory/history',
        roles: ['OWNER'],
      },
    ],
  },
  {
    key: 'accounts',
    label: 'Quản lý tài khoản',
    path: '/accounts',
    iconSrc: '/assets/users.svg',
    roles: ['OWNER'],
    children: [
      {
        key: 'accounts-create',
        label: 'Tạo tài khoản mới',
        path: '/accounts/new',
        roles: ['OWNER'],
      },
      {
        key: 'accounts-edit',
        label: 'Sửa thông tin tài khoản',
        path: '/accounts/edit',
        roles: ['OWNER'],
      },
      {
        key: 'accounts-reset',
        label: 'Đặt lại mật khẩu',
        roles: ['OWNER'],
        isAction: true,
      },
      {
        key: 'accounts-disable',
        label: 'Vô hiệu hóa tài khoản',
        path: '/accounts/disable',
        roles: ['OWNER'],
      },
    ],
  },
  {
    key: 'catalog',
    label: 'Quản lý danh mục sản phẩm và giá',
    iconSrc: '/assets/layers.svg',
    roles: ['OWNER'],
    children: [
      {
        key: 'catalog-categories',
        label: 'Danh mục sản phẩm',
        path: '/catalog/categories',
        roles: ['OWNER'],
      },
      {
        key: 'catalog-product-new',
        label: 'Thêm sản phẩm mới',
        path: '/catalog/products/new',
        roles: ['OWNER'],
      },
      {
        key: 'catalog-pricing',
        label: 'Cập nhật giá bán & giá gốc',
        path: '/catalog/pricing',
        roles: ['OWNER'],
      },
      {
        key: 'catalog-thresholds',
        label: 'Thiết lập ngưỡng cảnh báo',
        path: '/catalog/thresholds',
        roles: ['OWNER'],
      },
      {
        key: 'catalog-products',
        label: 'Tra cứu sản phẩm',
        path: '/catalog/products',
        roles: ['OWNER'],
      },
    ],
  },
  {
    key: 'purchases',
    label: 'Quản lý nhập hàng',
    iconSrc: '/assets/truck.svg',
    roles: ['OWNER'],
    children: [
      {
        key: 'purchases-new',
        label: 'Ghi nhận nhập hàng mới',
        path: '/purchases/new',
        roles: ['OWNER'],
      },
      {
        key: 'purchases-history',
        label: 'Xem lịch sử nhập hàng',
        path: '/purchases/history',
        roles: ['OWNER'],
      },
    ],
  },
  {
    key: 'reports',
    label: 'Xem thống kê và báo cáo',
    iconSrc: '/assets/bar-chart.svg',
    roles: ['OWNER'],
    children: [
      {
        key: 'reports-revenue',
        label: 'Xem doanh thu',
        path: '/reports/revenue',
        roles: ['OWNER'],
      },
      {
        key: 'reports-volume',
        label: 'Số lượng hàng bán/trả',
        path: '/reports/volume',
        roles: ['OWNER'],
      },
    ],
  },
];

/**
 * Lọc danh sách menu tập trung theo vai trò người dùng (không dùng CSS ẩn)
 */
export function getMenuForRole(role: string): MenuItem[] {
  const normalizedRole: Role = role === 'OWNER' ? 'OWNER' : 'EMPLOYEE';

  return APP_MENU_ITEMS.filter((item) => item.roles.includes(normalizedRole))
    .map((item) => {
      if (!item.children) return item;
      return {
        ...item,
        children: item.children.filter((child) => child.roles.includes(normalizedRole)),
      };
    })
    .filter((item) => !item.children || item.children.length > 0);
}

