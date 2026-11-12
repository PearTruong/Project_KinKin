import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'destructive' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg';

    // Chuẩn hóa màu sắc theo Figma Final (Cobalt Blue #2563EB, Slate #0F172A)
    const variantStyles = {
      primary: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8] focus:ring-[#2563eb]',
      secondary:
        'bg-white border border-[#e2e8f0] text-[#334155] hover:bg-[#f8fafc] hover:text-[#0f172a] focus:ring-[#2563eb]',
      outline:
        'border border-[#e2e8f0] bg-transparent text-[#0f172a] hover:bg-[#f1f5f9] focus:ring-[#2563eb]',
      danger: 'bg-[#ef4444] text-white hover:bg-[#dc2626] focus:ring-[#ef4444]',
      destructive: 'bg-[#ef4444] text-white hover:bg-[#dc2626] focus:ring-[#ef4444]',
      ghost: 'bg-transparent text-[#64748b] hover:text-[#0f172a] hover:bg-black/5 focus:ring-[#2563eb]',
      link: 'bg-transparent text-[#2563eb] underline-offset-4 hover:underline focus:ring-[#2563eb] p-0 h-auto',
    }[variant];

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-2.5 text-base',
    }[size];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
