'use client';

import { RoutePlaceholder } from '@/components/ui/route-placeholder';

export default function InventoryPage() {
  return (
    <RoutePlaceholder
      title="Tra cứu tồn kho"
      useCase="UC_4.4"
      lane="Lane 5 (FE-06)"
      figmaNodeId="1:34666"
      description="Tra cứu tồn kho thực tế, bộ lọc 4 trạng thái tồn (Hết hàng, Sắp hết, Tồn lâu, Còn hàng)."
    />
  );
}
