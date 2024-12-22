import React from 'react';

interface NotesProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
}

export function Notes({ value, onChange, label, placeholder }: NotesProps) {
  return (
    <div className="space-y-2 p-2">
      <label className="block text-sm text-gray-700">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-24 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </div>
  );
}