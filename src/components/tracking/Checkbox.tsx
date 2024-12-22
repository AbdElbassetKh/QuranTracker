import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <button
      onClick={onChange}
      className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md w-full"
    >
      {checked ? (
        <CheckCircle2 className="w-5 h-5 text-green-500" />
      ) : (
        <Circle className="w-5 h-5 text-gray-300" />
      )}
      <span className="text-sm text-gray-700">{label}</span>
    </button>
  );
}