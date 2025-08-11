import { Button } from '@/shared/ui';
import { DatePickerRange } from '@/widgets/date-picker/ui/DatePickerRange';
import type { SuperDatePickerProps } from '@/widgets/super-date-picker/model/types';
import styles from './SuperDatePicker.module.css';

export const SuperDatePicker = ({ value, onChange }: SuperDatePickerProps) => {
  return (
    <div className={styles.wrapper}>
      <DatePickerRange value={value} onChange={onChange} />

      <Button>Update</Button>
    </div>
  );
};
