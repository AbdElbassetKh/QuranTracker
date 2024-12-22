import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface StepSectionProps {
  title: string;
  children: React.ReactNode;
}

export function StepSection({ title, children }: StepSectionProps) {
  return (
    <section className="border-b border-gray-200 py-4 last:border-0">
      <h3 className="font-medium text-gray-900 mb-3">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </section>
  );
}