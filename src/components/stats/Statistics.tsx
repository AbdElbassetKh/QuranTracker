import React from 'react';
import { useStore } from '../../store/useStore';
import { getWeeklyStats, getOverallStats } from '../../utils/statisticsHelpers';
import { StatCard } from './StatCard';
import { WeeklyProgress } from './WeeklyProgress';

export function Statistics() {
  const { dailyProgress } = useStore();
  const weeklyStats = getWeeklyStats(dailyProgress);
  const { totalPages, averageCompletion, completedDays } = getOverallStats(dailyProgress);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Pages Memorized"
          value={totalPages}
          subtitle="Pages tracked"
        />
        <StatCard
          title="Average Completion"
          value={`${Math.round(averageCompletion)}%`}
          subtitle="Daily tasks completed"
        />
        <StatCard
          title="Perfect Days"
          value={completedDays}
          subtitle="100% completion"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <WeeklyProgress weeklyStats={weeklyStats} />
      </div>
    </div>
  );
}