import { Button, Icon } from '@/shared/ui';
import { Select } from '@/shared/ui/select/Select';
import { capitalize } from '@/shared/utils/capitalize';
import { getDateList } from '@/widgets/calendar/lib/getDateList';
import type { CalendarHeaderProps } from '@/widgets/calendar/model/types';
import { useMemo } from 'react';
import styles from './CalendarHeader.module.css';

export const CalendarHeader = ({ year, month, setYear, setMonth, onPrev, onNext }: CalendarHeaderProps) => {
  const monthList = useMemo(() => getDateList(), []);

  const years = useMemo(() => {
    const limit = 7;
    const start = year - limit;

    return Array.from({ length: start * 2 + 1 }, (_, i) => start + i);
  }, [year]);

  return (
    <div className={styles.wrapper}>
      <Button onClick={onPrev} aria-label="Prev month" title="Prev month" className={styles.button}>
        <Icon name="chevronLeft" />
      </Button>

      <Select value={month} label="Month" onChange={(e) => setMonth(parseInt(e.target.value))}>
        {monthList.map((month, i) => (
          <option key={month} value={i}>
            {capitalize(month)}
          </option>
        ))}
      </Select>

      <Select value={year} label="Year" onChange={(e) => setYear(parseInt(e.target.value))}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>

      <Button onClick={onNext} aria-label="Next month" title="Next month" className={styles.button}>
        <Icon name="chevronRight" />
      </Button>
    </div>
  );
};
