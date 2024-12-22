import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';
import { getDaysInMonth } from '../../utils/calendarHelpers';
import { useStore } from '../../store/useStore';
import { useReviewStore } from '../../store/useReviewStore';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { dailyProgress } = useStore();
  const { weeklyReview } = useReviewStore();
  
  const days = getDaysInMonth(currentDate);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      
      <div className="grid grid-cols-7 gap-px">
        {WEEKDAYS.map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-700">
            {day}
          </div>
        ))}
        
        {days.map(date => (
          <CalendarDay
            key={date.toISOString()}
            date={date}
            progress={dailyProgress[date.toISOString().split('T')[0]]}
          />
        ))}
      </div>
    </div>
  );
}