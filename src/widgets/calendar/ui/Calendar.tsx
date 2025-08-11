import { generateCalendarDays } from '@/widgets/calendar/lib/generateCalendarDays';
import type { CalendarProps } from '@/widgets/calendar/model/types';
import { CalendarGrid } from '@/widgets/calendar/ui/CalendarGrid/CalendarGrid';
import { CalendarHeader } from '@/widgets/calendar/ui/CalendarHeader/CalendarHeader';
import { useState } from 'react';

export const Calendar = ({ value = null, onChange }: CalendarProps) => {
  const [current, setCurrent] = useState<Date>(value ?? new Date());

  const month = current.getMonth();
  const year = current.getFullYear();

  const handleDateSelect = (day: number) => {
    onChange(new Date(year, month, day));
  };

  const shiftMonth = (delta: number) => {
    setCurrent((prev) => {
      const date = new Date(prev);
      date.setMonth(date.getMonth() + delta);
      return date;
    });
  };

  return (
    <>
      <CalendarHeader
        year={year}
        month={month}
        setYear={(y) => setCurrent(new Date(y, month, 1))}
        setMonth={(m) => setCurrent(new Date(year, m, 1))}
        onPrev={() => shiftMonth(-1)}
        onNext={() => shiftMonth(1)}
      />
      <CalendarGrid days={generateCalendarDays(year, month)} onDayClick={handleDateSelect} selectedDate={value} />
    </>
  );
};
