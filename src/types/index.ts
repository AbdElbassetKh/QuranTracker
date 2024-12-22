export interface Page {
  pageNumber: number;
  juz: number;
  surah: string;
  ayahRange: string;
}

export interface DailyProgress {
  date: string;
  pageNumber: number;
  steps: {
    continuousReading: boolean;
    preparation: {
      weeklyPrep: boolean;
      nightlyPrep: boolean;
      preMemorizationPrep: boolean;
    };
    listening: {
      count: number;
      completed: boolean;
    };
    interpretation: {
      notes: string;
      completed: boolean;
    };
    memorization: {
      attentiveReading: boolean;
      intensiveRepetition: boolean;
      connectionNotes: string;
    };
    recording: {
      recorded: boolean;
      reviewed: boolean;
      corrected: boolean;
    };
    repetition: {
      byHeartCount: number;
      completed: boolean;
    };
    yesterdayRepetition: {
      count: number;
      completed: boolean;
    };
    linking: {
      completed: boolean;
    };
    review: {
      nearbyPages: number[];
      completedPages: number[];
    };
  };
}