import React from 'react';
import { format } from 'date-fns';
import { ProgressBar } from './ProgressBar';

interface WeeklyProgressProps {
  weeklyStats: Array<{
    date: string;
    completion: number;
    pageNumber?: number;
  }>;
}

export function WeeklyProgress({ weeklyStats }: WeeklyProgressProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Weekly Progress</h3>
      <div className="space-y-3">
        {weeklyStats.map(({ date, completion, pageNumber }) => (
          <div key={date} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{format(new Date(date), 'EEEE')}</span>
              <span>{pageNumber ? `Page ${pageNumber}` : 'No progress'}</span>
            </div>
            <ProgressBar percentage={completion} />
          </div>
        ))}
      </div>
    </div>
  );
}