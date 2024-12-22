import React from 'react';

interface ProgressBarProps {
  percentage: number;
  label?: string;
}

export function ProgressBar({ percentage, label }: ProgressBarProps) {
  return (
    <div className="space-y-1">
      {label && <div className="text-sm text-gray-600">{label}</div>}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>
    </div>
  );
}