'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Construction } from 'lucide-react';

export interface RoutePlaceholderProps {
  title: string;
  useCase: string;
  figmaNodeId?: string;
  lane: string;
  description?: string;
}

export function RoutePlaceholder({
  title,
  useCase,
  figmaNodeId,
  lane,
  description = 'Màn hình đang được xây dựng theo đúng tiến độ lộ trình MVP 10 ngày.',
}: RoutePlaceholderProps) {
  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-[#0f172a]">{title}</h1>
          <Badge variant="primary">{lane}</Badge>
          <Badge variant="secondary">{useCase}</Badge>
        </div>
        <p className="text-sm text-[#64748b]">
          {figmaNodeId ? `Figma Final Node: ${figmaNodeId}` : 'Khung giao diện bám sát đặc tả'}
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Construction className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>Khung điều hướng nền tảng (FE-01 Skeleton)</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-slate-50 p-4 border border-[#e2e8f0] text-sm text-[#475569] space-y-2">
            <p className="font-medium text-[#0f172a]">Thông tin phân rã kỹ thuật:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-[#64748b]">
              <li>Use Case nghiệp vụ: <span className="font-semibold text-[#0f172a]">{useCase}</span></li>
              <li>Lane phụ trách: <span className="font-semibold text-[#0f172a]">{lane}</span></li>
              {figmaNodeId && (
                <li>Node đối chiếu Figma: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">{figmaNodeId}</code></li>
              )}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
