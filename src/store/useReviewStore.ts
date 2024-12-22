import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ReviewPipe, WeeklyReview } from '../types/review';
import { shouldCreateNewPipe, getNextAvailableDay } from '../utils/reviewHelpers';

interface ReviewStore {
  weeklyReview: WeeklyReview;
  addPageToReview: (pageNumber: number) => void;
  markPipeAsReviewed: (day: string) => void;
}

const INITIAL_STATE: WeeklyReview = {
  pipes: [{ day: 'Saturday', pages: [], lastReviewed: undefined }],
  currentPipeSize: 0,
};

export const useReviewStore = create<ReviewStore>()(
  persist(
    (set, get) => ({
      weeklyReview: INITIAL_STATE,
      addPageToReview: (pageNumber) => {
        set(state => {
          const newState = { ...state };
          const currentPipe = newState.weeklyReview.pipes[newState.weeklyReview.pipes.length - 1];

          if (shouldCreateNewPipe(currentPipe)) {
            const nextDay = getNextAvailableDay(newState.weeklyReview.pipes);
            if (nextDay) {
              newState.weeklyReview.pipes.push({
                day: nextDay,
                pages: [pageNumber],
              });
            }
          } else {
            currentPipe.pages.push(pageNumber);
          }

          return newState;
        });
      },
      markPipeAsReviewed: (day) => {
        set(state => {
          const newPipes = state.weeklyReview.pipes.map(pipe => 
            pipe.day === day 
              ? { ...pipe, lastReviewed: new Date().toISOString() }
              : pipe
          );
          return {
            ...state,
            weeklyReview: {
              ...state.weeklyReview,
              pipes: newPipes,
            },
          };
        });
      },
    }),
    {
      name: 'quran-review-storage',
    }
  )
);