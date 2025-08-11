import type { ValidationState } from '@/shared/types/validation';
import { Button } from '@/shared/ui';
import { DatePickerRange } from '@/widgets/date-picker/ui/DatePickerRange';
import type { SuperDatePickerProps } from '@/widgets/super-date-picker/model/types';
import { useEffect, useState } from 'react';
import styles from './SuperDatePicker.module.css';

export const SuperDatePicker = ({ value, onChange }: SuperDatePickerProps) => {
  const [validation, setValidation] = useState<ValidationState>('default');

  useEffect(() => {
    if (!value.from || !value.to) {
      setValidation('default');
      return;
    }

    setValidation(value.from <= value.to ? 'success' : 'error');
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <DatePickerRange value={value} onChange={onChange} state={validation} />

      <Button state={validation} disabled={validation === 'error'}>
        Update
      </Button>
    </div>
  );
};
