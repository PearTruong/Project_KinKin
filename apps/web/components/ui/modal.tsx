import React from 'react';
import { Button } from './button';
import { AlertTriangle, X } from 'lucide-react';

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDestructive?: boolean;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  isOpen,
  title,
  description,
  confirmLabel = 'Xác nhận',
  cancelLabel = 'Hủy bỏ',
  isDestructive = false,
  isLoading = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onCancel} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all border border-[var(--line)]">
        <button
          onClick={onCancel}
          className="absolute right-4 top-4 text-[var(--muted)] hover:text-[var(--ink)]"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-start gap-4 mb-4">
          <div
            className={`grid size-10 place-items-center rounded-xl flex-shrink-0 ${
              isDestructive ? 'bg-red-100 text-red-600' : 'bg-[#eaf4ea] text-[var(--green)]'
            }`}
          >
            <AlertTriangle className="size-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--ink)]">{title}</h3>
            <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <Button variant="outline" size="md" onClick={onCancel} disabled={isLoading}>
            {cancelLabel}
          </Button>
          <Button
            variant={isDestructive ? 'danger' : 'primary'}
            size="md"
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

