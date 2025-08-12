import { TimePicker } from '@/shared/ui/time-picker/TimePicker';
import { generateCalendarDays } from '@/widgets/calendar/lib/generateCalendarDays';
import type { CalendarProps } from '@/widgets/calendar/model/types';
import { CalendarGrid } from '@/widgets/calendar/ui/CalendarGrid/CalendarGrid';
import { CalendarHeader } from '@/widgets/calendar/ui/CalendarHeader/CalendarHeader';
import { useState } from 'react';
import styles from './Calendar.module.css';

export const Calendar = ({ value = null, onChange }: CalendarProps) => {
  const [current, setCurrent] = useState<Date>(value ?? new Date());

  const month = current.getMonth();
  const year = current.getFullYear();

  const handleDateSelect = (day: number) => {
    const hh = value?.getHours() ?? 0;
    const mm = value?.getMinutes() ?? 0;
    onChange(new Date(year, month, day, hh, mm, 0, 0));
  };

  const handleTimeSelect = (time: Date) => {
    onChange(new Date(time));
  };

  const shiftMonth = (delta: number) => {
    setCurrent((prev) => {
      const date = new Date(prev);
      date.setMonth(date.getMonth() + delta);
      return date;
    });
  };

  return (
    <div className="month-container">
      <CalendarHeader
        year={year}
        month={month}
        setYear={(y) => setCurrent(new Date(y, month, 1))}
        setMonth={(m) => setCurrent(new Date(year, m, 1))}
        onPrev={() => shiftMonth(-1)}
        onNext={() => shiftMonth(1)}
      />
      <div className={styles.datePickerContainer}>
        <CalendarGrid days={generateCalendarDays(year, month)} onDayClick={handleDateSelect} selectedDate={value} />
        <TimePicker value={value} onChange={handleTimeSelect} />
      </div>
    </div>
  );
};
