import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DailyProgress } from '../types';
import { format } from 'date-fns';

interface Store {
  dailyProgress: Record<string, DailyProgress>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  updateProgress: (progress: Partial<DailyProgress['steps']>) => void;
  getTodayProgress: () => DailyProgress | undefined;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      dailyProgress: {},
      currentPage: 1,
      setCurrentPage: (page) => set({ currentPage: page }),
      updateProgress: (progress) => {
        const today = format(new Date(), 'yyyy-MM-dd');
        const currentProgress = get().dailyProgress[today] || {
          date: today,
          pageNumber: get().currentPage,
          steps: {
            continuousReading: false,
            preparation: {
              weeklyPrep: false,
              nightlyPrep: false,
              preMemorizationPrep: false,
            },
            listening: {
              count: 0,
              completed: false,
            },
            interpretation: {
              notes: '',
              completed: false,
            },
            memorization: {
              attentiveReading: false,
              intensiveRepetition: false,
              connectionNotes: '',
            },
            recording: {
              recorded: false,
              reviewed: false,
              corrected: false,
            },
            repetition: {
              byHeartCount: 0,
              completed: false,
            },
            yesterdayRepetition: {
              count: 0,
              completed: false,
            },
            linking: {
              completed: false,
            },
            review: {
              nearbyPages: [],
              completedPages: [],
            },
          },
        };

        set({
          dailyProgress: {
            ...get().dailyProgress,
            [today]: {
              ...currentProgress,
              steps: {
                ...currentProgress.steps,
                ...progress,
              },
            },
          },
        });
      },
      getTodayProgress: () => {
        const today = format(new Date(), 'yyyy-MM-dd');
        return get().dailyProgress[today];
      },
    }),
    {
      name: 'quran-memorization-storage',
    }
  )
);