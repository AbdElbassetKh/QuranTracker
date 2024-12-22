import React from 'react';
import { format } from 'date-fns';
import { DayProgress } from '../../types/calendar';
import { getProgressColor } from '../../utils/calendarHelpers';

interface CalendarDayProps {
  date: Date;
  progress?: DayProgress;
}

export function CalendarDay({ date, progress }: CalendarDayProps) {
  const dayNumber = format(date, 'd');
  const hasProgress = !!progress;
  
  return (
    <div className="h-24 border border-gray-200 p-2">
      <div className="flex justify-between items-start">
        <span className="text-sm">{dayNumber}</span>
        {hasProgress && (
          <div className="flex gap-1">
            <div 
              className={`w-2 h-2 rounded-full ${getProgressColor(
                progress.stepsCompleted,
                progress.totalSteps
              )}`} 
              title="Daily progress"
            />
            <div 
              className={`w-2 h-2 rounded-full ${getProgressColor(
                progress.reviewsCompleted,
                progress.totalReviews
              )}`}
              title="Review progress"
            />
          </div>
        )}
      </div>
      {hasProgress && (
        <div className="mt-1 text-xs text-gray-600">
          <p>Page: {progress.pageNumber}</p>
          <p>{progress.stepsCompleted}/{progress.totalSteps} steps</p>
          <p>{progress.reviewsCompleted}/{progress.totalReviews} reviews</p>
        </div>
      )}
    </div>
  );
}