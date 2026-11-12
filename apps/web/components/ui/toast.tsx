import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
}

export function Toast({ toast, onClose }: { toast: ToastMessage; onClose: (id: string) => void }) {
  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      if (isMounted) {
        onClose(toast.id);
      }
    }, 4000);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [toast.id, onClose]);

  const icons = {
    success: <CheckCircle2 className="size-5 text-[var(--green)] flex-shrink-0" />,
    error: <AlertCircle className="size-5 text-red-600 flex-shrink-0" />,
    info: <Info className="size-5 text-blue-600 flex-shrink-0" />,
  };

  const borders = {
    success: 'border-[var(--green)]/30 bg-[#f4fbf6]',
    error: 'border-red-200 bg-red-50',
    info: 'border-blue-200 bg-blue-50',
  };

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border p-4 shadow-lg backdrop-blur-md transition-all ${
        borders[toast.type]
      }`}
    >
      {icons[toast.type]}
      <p className="text-sm font-medium text-[var(--ink)] pr-2">{toast.message}</p>
      <button
        onClick={() => onClose(toast.id)}
        className="ml-auto text-[var(--muted)] hover:text-[var(--ink)] focus:outline-none"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}

export function ToastContainer({
  toasts,
  onClose,
}: {
  toasts: ToastMessage[];
  onClose: (id: string) => void;
}) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-auto">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
}
