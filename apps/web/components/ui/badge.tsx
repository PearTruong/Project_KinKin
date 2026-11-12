import React from 'react';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export type InventoryStatus = 'OUT_OF_STOCK' | 'LOW_STOCK' | 'AGED' | 'IN_STOCK';
export type UserRole = 'OWNER' | 'EMPLOYEE';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

export function Badge({
  className = '',
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
  }[size];

  const variantStyles = {
    default: 'bg-slate-100 text-slate-700',
    primary: 'bg-blue-50 text-blue-700 border border-blue-200',
    secondary: 'bg-slate-100 text-slate-700 border border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    danger: 'bg-red-50 text-red-700 border border-red-200',
    info: 'bg-sky-50 text-sky-700 border border-sky-200',
    neutral: 'bg-slate-100 text-slate-600 border border-slate-200',
  }[variant];

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </span>
  );
}

export interface InventoryBadgeProps {
  status?: InventoryStatus;
  stock?: number;
  className?: string;
}

export function InventoryBadge({ status, stock, className = '' }: InventoryBadgeProps) {
  if (!status) {
    if (stock === 0) status = 'OUT_OF_STOCK';
    else if (stock && stock <= 5) status = 'LOW_STOCK';
    else status = 'IN_STOCK';
  }

  const config = {
    OUT_OF_STOCK: {
      label: 'Hết hàng',
      variant: 'danger' as const,
    },
    LOW_STOCK: {
      label: 'Sắp hết',
      variant: 'warning' as const,
    },
    AGED: {
      label: 'Tồn lâu',
      variant: 'neutral' as const,
    },
    IN_STOCK: {
      label: 'Còn hàng',
      variant: 'success' as const,
    },
  }[status];

  return (
    <Badge variant={config.variant} className={className}>
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {config.label}
    </Badge>
  );
}

export interface RoleBadgeProps {
  role: UserRole | string;
  className?: string;
}

export function RoleBadge({ role, className = '' }: RoleBadgeProps) {
  const isOwner = role === 'OWNER';
  return (
    <Badge variant={isOwner ? 'primary' : 'neutral'} className={className}>
      {isOwner ? 'Chủ cửa hàng' : 'Nhân viên'}
    </Badge>
  );
}
