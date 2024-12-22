import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { ReviewPipe as ReviewPipeType } from '../types/review';
import { getReviewStatus } from '../utils/reviewHelpers';

interface ReviewPipeProps {
  pipe: ReviewPipeType;
  onMarkReviewed: (day: string) => void;
}

export function ReviewPipe({ pipe, onMarkReviewed }: ReviewPipeProps) {
  const status = getReviewStatus(pipe);
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-900">{pipe.day}</h3>
        <button
          onClick={() => onMarkReviewed(pipe.day)}
          className="flex items-center space-x-2"
          disabled={status === 'completed'}
        >
          {status === 'completed' ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5 text-gray-300" />
          )}
        </button>
      </div>
      <div className="text-sm text-gray-600">
        <p>Pages to review: {pipe.pages.length}</p>
        <p className="mt-1">Pages: {pipe.pages.join(', ')}</p>
      </div>
    </div>
  );
}