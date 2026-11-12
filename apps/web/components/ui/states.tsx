import React from 'react';
import { AlertCircle, Inbox, Loader2 } from 'lucide-react';
import { Button } from './button';

export function LoadingState({ message = 'Đang tải dữ liệu…' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <Loader2 className="size-8 animate-spin text-[var(--green)] mb-3" />
      <p className="text-sm font-medium text-[var(--muted)]">{message}</p>
    </div>
  );
}

export function EmptyState({
  title = 'Chưa có dữ liệu',
  description = 'Hiện chưa có bản ghi nào phù hợp.',
  actionLabel,
  onAction,
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-[var(--line)] bg-white/50">
      <div className="grid size-12 place-items-center rounded-2xl bg-[#edf3ea] text-[var(--green)] mb-4">
        <Inbox className="size-6" />
      </div>
      <h3 className="text-base font-bold text-[var(--ink)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--muted)] max-w-sm mb-5">{description}</p>
      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export function ErrorState({
  title = 'Có lỗi xảy ra',
  message = 'Không thể tải thông tin. Vui lòng thử lại sau.',
  onRetry,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-red-200 bg-red-50/50">
      <div className="grid size-12 place-items-center rounded-2xl bg-red-100 text-red-600 mb-4">
        <AlertCircle className="size-6" />
      </div>
      <h3 className="text-base font-bold text-red-900 mb-1">{title}</h3>
      <p className="text-sm text-red-600 max-w-sm mb-5">{message}</p>
      {onRetry && (
        <Button variant="danger" size="sm" onClick={onRetry}>
          Thử lại
        </Button>
      )}
    </div>
  );
}

