'use client';

import { RoutePlaceholder } from '@/components/ui/route-placeholder';

export default function ProductsPage() {
  return (
    <RoutePlaceholder
      title="Tra cứu danh sách sản phẩm"
      useCase="UC_7.9"
      lane="Lane 3 (FE-05)"
      figmaNodeId="1:27939"
      description="Tra cứu sản phẩm theo tên/SKU, phân quyền hiển thị giá vốn (OWNER) và ẩn giá vốn (EMPLOYEE)."
    />
  );
}
