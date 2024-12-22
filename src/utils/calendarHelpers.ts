import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { DayProgress } from '../types/calendar';

export function getDaysInMonth(date: Date): Date[] {
  return eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date)
  });
}

export function getProgressForDay(progress: DayProgress, date: Date): DayProgress | undefined {
  return progress && isSameDay(new Date(progress.date), date) ? progress : undefined;
}

export function getProgressColor(completed: number, total: number): string {
  if (total === 0) return 'bg-gray-100';
  const percentage = (completed / total) * 100;
  if (percentage === 100) return 'bg-green-500';
  if (percentage >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
}