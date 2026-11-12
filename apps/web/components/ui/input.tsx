import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, errorMessage, prefixIcon, suffixIcon, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        <div className="relative flex items-center w-full">
          {prefixIcon && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-[#64748b]">
              {prefixIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full h-10 rounded-lg border ${
              error
                ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]'
                : 'border-[#e2e8f0] focus:border-[#2563eb] focus:ring-[#2563eb]'
            } bg-white ${
              prefixIcon ? 'pl-10' : 'pl-3.5'
            } ${
              suffixIcon ? 'pr-10' : 'pr-3.5'
            } py-2 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all focus:ring-1 disabled:bg-slate-50 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
            {...props}
          />
          {suffixIcon && (
            <div className="absolute right-3.5 flex items-center text-[#64748b]">
              {suffixIcon}
            </div>
          )}
        </div>
        {errorMessage && (
          <p className="text-xs text-[#ef4444] mt-0.5 leading-tight">{errorMessage}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
