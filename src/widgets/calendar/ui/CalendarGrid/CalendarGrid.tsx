import { Button } from '@/shared/ui';
import { capitalize } from '@/shared/utils/capitalize';
import { cn } from '@/shared/utils/cn';
import { getDateList } from '@/widgets/calendar/lib/getDateList';
import type { CalendarGridProps } from '@/widgets/calendar/model/types';
import { isSameDay } from 'date-fns';
import { useMemo } from 'react';
import styles from './CalendarGrid.module.css';

export const CalendarGrid = ({ days, onDayClick, selectedDate }: CalendarGridProps) => {
  const selected = selectedDate ?? null;
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
          const isSelected = selected ? isSameDay(d.date, selected) : false;

          return (
            <Button
              key={d.date.getTime()}
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
