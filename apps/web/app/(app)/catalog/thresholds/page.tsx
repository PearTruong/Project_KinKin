'use client';

import { RoutePlaceholder } from '@/components/ui/route-placeholder';

export default function ThresholdsPage() {
  return (
    <RoutePlaceholder
      title="Thiết lập ngưỡng cảnh báo tồn kho"
      useCase="UC_7.8"
      lane="Lane 3 (FE-05)"
      figmaNodeId="1:25733"
      description="Cấu hình min/max alertThreshold và agedStockThresholdDays với dynamic status preview."
    />
  );
}
