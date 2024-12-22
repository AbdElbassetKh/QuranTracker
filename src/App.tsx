import React from 'react';
import { DailyTracker } from './components/DailyTracker';
import { WeeklyReview } from './components/WeeklyReview';
import { Calendar } from './components/calendar/Calendar';
import { Statistics } from './components/stats/Statistics';
import { Book } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-emerald-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Book className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Quran Memorization Tracker</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <Statistics />
        <Calendar />
        <DailyTracker />
        <WeeklyReview />
      </main>
    </div>
  );
}

export default App;