'use client';

import { RoutePlaceholder } from '@/components/ui/route-placeholder';

export default function OrderLookupPage() {
  return (
    <RoutePlaceholder
      title="Tra cứu hóa đơn bán lẻ"
      useCase="UC_2.2"
      lane="Lane 4 (FE-09)"
      figmaNodeId="1:8668"
      description="Tra cứu danh sách hóa đơn theo mã đơn, ngày tạo, nhân viên thu ngân và in lại hóa đơn."
    />
  );
}
