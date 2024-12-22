export interface ReviewPipe {
  day: string; // day of week
  pages: number[];
  lastReviewed?: string; // ISO date string
}

export interface WeeklyReview {
  pipes: ReviewPipe[];
  currentPipeSize: number;
}