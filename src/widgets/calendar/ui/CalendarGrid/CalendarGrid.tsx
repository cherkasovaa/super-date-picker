import { Button } from '@/shared/ui';
import { cn } from '@/shared/utils/cn';
import { getDateList } from '@/widgets/calendar/lib/getDateList';
import type { CalendarGridProps } from '@/widgets/calendar/model/types';
import { capitalize } from '@/shared/utils/capitalize';
import { useMemo } from 'react';
import styles from './CalendarGrid.module.css';

export const CalendarGrid = ({ days, onDayClick, selectedDate }: CalendarGridProps) => {
  const selected = selectedDate?.setHours(0, 0, 0, 0) ?? null;
  const weekdayList = useMemo(() => getDateList('weekday', 'short'), []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {weekdayList.map((w) => (
          <div key={w} className={styles.dayNames}>
            {capitalize(w)}
          </div>
        ))}
      </div>

      <div className={styles.month}>
        {days.map((d) => {
          const timestamp = d.date.getTime();
          const isSelected = timestamp === selected;

          return (
            <Button
              key={timestamp}
              className={cn([styles.dayNumber, d.isCurrentMonth && styles.active, isSelected && styles.selected])}
              onClick={() => onDayClick(d.dayOfMonth)}
              disabled={!d.isCurrentMonth}
            >
              {d.dayOfMonth}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
