import { getMonthDetails } from '@/widgets/calendar/lib/getMonthDetails';
import type { CalendarDay } from '@/widgets/calendar/model/types';

export const generateCalendarDays = (year: number, month: number): CalendarDay[] => {
  const currentMonth = getMonthDetails(year, month);
  const prevMonth = getMonthDetails(year, month - 1);

  const days: CalendarDay[] = [];

  for (let i = 0; i < currentMonth.firstDay; i++) {
    const day = prevMonth.numberOfDays - currentMonth.firstDay + i + 1;

    days.push({
      date: new Date(year, month - 1, day),
      dayOfMonth: day,
      isCurrentMonth: false,
    });
  }

  for (let i = 1; i <= currentMonth.numberOfDays; i++) {
    days.push({
      date: new Date(year, month, i),
      dayOfMonth: i,
      isCurrentMonth: true,
    });
  }

  const dayFromNextMonth = 42 - days.length;

  for (let i = 1; i <= dayFromNextMonth; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      dayOfMonth: i,
      isCurrentMonth: false,
    });
  }

  return days;
};
