import { format, parseISO, isToday } from 'date-fns';
import { ReviewPipe } from '../types/review';

export const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const MAX_PIPE_SIZE = 40; // 2 Juz'

export function shouldCreateNewPipe(currentPipe: ReviewPipe): boolean {
  return currentPipe.pages.length >= MAX_PIPE_SIZE;
}

export function getNextAvailableDay(existingPipes: ReviewPipe[]): string | null {
  const usedDays = new Set(existingPipes.map(pipe => pipe.day));
  return DAYS_OF_WEEK.find(day => !usedDays.has(day)) || null;
}

export function isPipeReviewedToday(pipe: ReviewPipe): boolean {
  return pipe.lastReviewed ? isToday(parseISO(pipe.lastReviewed)) : false;
}

export function getReviewStatus(pipe: ReviewPipe): 'completed' | 'pending' | 'upcoming' {
  if (!pipe.lastReviewed) return 'pending';
  return isPipeReviewedToday(pipe) ? 'completed' : 'pending';
}