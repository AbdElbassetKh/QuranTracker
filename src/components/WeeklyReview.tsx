import React from 'react';
import { useReviewStore } from '../store/useReviewStore';
import { ReviewPipe } from './ReviewPipe';

export function WeeklyReview() {
  const { weeklyReview, markPipeAsReviewed } = useReviewStore();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Weekly Review Pipes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {weeklyReview.pipes.map((pipe) => (
          <ReviewPipe
            key={pipe.day}
            pipe={pipe}
            onMarkReviewed={markPipeAsReviewed}
          />
        ))}
      </div>
    </div>
  );
}