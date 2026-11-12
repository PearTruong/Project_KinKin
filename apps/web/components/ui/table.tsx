import React from 'react';

export function Table({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full overflow-x-auto rounded-2xl border border-[var(--line)] bg-white ${className}`}>
      <table className="w-full text-left text-sm text-[var(--ink)]">{children}</table>
    </div>
  );
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead className="border-b border-[var(--line)] bg-[#f8faf7] text-xs font-bold text-[var(--muted)] uppercase tracking-wider">{children}</thead>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-[var(--line)]">{children}</tbody>;
}

export function TableRow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <tr className={`hover:bg-[#fbfcfb] transition-colors ${className}`}>{children}</tr>;
}

export function TableHead({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return <th className={`px-4 py-3.5 font-bold ${className}`}>{children}</th>;
}

export function TableCell({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3.5 align-middle ${className}`}>{children}</td>;
}

