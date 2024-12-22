import { DailyProgress } from '../types';
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

export function calculateDailyCompletion(progress: DailyProgress): number {
  const steps = progress.steps;
  let completed = 0;
  let total = 0;

  // Continuous Reading
  if (steps.continuousReading) completed++;
  total++;

  // Preparation
  if (steps.preparation.weeklyPrep) completed++;
  if (steps.preparation.nightlyPrep) completed++;
  if (steps.preparation.preMemorizationPrep) completed++;
  total += 3;

  // Listening
  if (steps.listening.completed) completed++;
  total++;

  // Interpretation
  if (steps.interpretation.completed) completed++;
  total++;

  // Memorization
  if (steps.memorization.attentiveReading) completed++;
  if (steps.memorization.intensiveRepetition) completed++;
  total += 2;

  // Recording
  if (steps.recording.recorded) completed++;
  if (steps.recording.reviewed) completed++;
  if (steps.recording.corrected) completed++;
  total += 3;

  // Repetition
  if (steps.repetition.completed) completed++;
  total++;

  // Yesterday's Review
  if (steps.yesterdayRepetition.completed) completed++;
  total++;

  // Linking
  if (steps.linking.completed) completed++;
  total++;

  return (completed / total) * 100;
}

export function getWeeklyStats(dailyProgress: Record<string, DailyProgress>) {
  const today = new Date();
  const start = startOfWeek(today);
  const end = endOfWeek(today);
  const days = eachDayOfInterval({ start, end });

  return days.map(day => {
    const dateKey = format(day, 'yyyy-MM-dd');
    const progress = dailyProgress[dateKey];
    return {
      date: dateKey,
      completion: progress ? calculateDailyCompletion(progress) : 0,
      pageNumber: progress?.pageNumber
    };
  });
}

export function getOverallStats(dailyProgress: Record<string, DailyProgress>) {
  const entries = Object.values(dailyProgress);
  
  return {
    totalPages: entries.length,
    averageCompletion: entries.reduce((acc, progress) => 
      acc + calculateDailyCompletion(progress), 0) / (entries.length || 1),
    completedDays: entries.filter(progress => 
      calculateDailyCompletion(progress) === 100).length
  };
}