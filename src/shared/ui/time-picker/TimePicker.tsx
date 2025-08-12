import type { TimePickerProps } from '@/shared/ui/time-picker/types';
import { generateTimeList } from '@/widgets/date-picker/lib/generateTimeList';
import { useMemo } from 'react';
import styles from './TimePicker.module.css';

export const TimePicker = ({ value = null, onChange, step = 30 }: TimePickerProps) => {
  const timeList = useMemo(() => generateTimeList(step), [step]);

  const handleDateSelect = (time: string) => {
    const [hh, mm] = time.split(':').map(Number);

    const base = value ?? new Date();

    const next = new Date(base);
    next.setHours(hh, mm, 0, 0);

    onChange(next);
  };

  return (
    <div className={styles.timeContainer}>
      <div className={styles.timeBox}>
        <ul className={styles.timeList} role="listbox">
          {timeList.map((time) => (
            <li key={time} className={styles.timeListItem} role="option" onClick={() => handleDateSelect(time)}>
              {time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
