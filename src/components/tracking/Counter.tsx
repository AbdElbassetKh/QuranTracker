import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  max?: number;
}

export function Counter({ value, onChange, label, max }: CounterProps) {
  const increment = () => {
    if (!max || value < max) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-2">
      <span className="text-sm text-gray-700">{label}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={decrement}
          className="p-1 rounded-md hover:bg-gray-100"
          disabled={value === 0}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{value}</span>
        <button
          onClick={increment}
          className="p-1 rounded-md hover:bg-gray-100"
          disabled={max !== undefined && value >= max}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}