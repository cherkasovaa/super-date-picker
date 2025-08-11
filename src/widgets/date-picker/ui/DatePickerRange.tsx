import { Button, Icon, Popover } from '@/shared/ui';
import { cn } from '@/shared/utils/cn';
import { formatLabel } from '@/shared/utils/formatLabel';
import { Calendar } from '@/widgets/calendar';
import type { DatePickerRangeProps } from '@/widgets/date-picker/model/types';
import styles from './DatePickerRange.module.css';

export const DatePickerRange = ({ value, onChange, state }: DatePickerRangeProps) => {
  const labelFrom = formatLabel(value.from) ?? 'Choose start date';
  const labelTo = formatLabel(value.to) ?? 'Choose end date';

  return (
    <div className={cn([styles.wrapper, state === 'error' && styles.error, state === 'success' && styles.success])}>
      <Popover
        trigger={
          <Button
            title={`Update needed: ${labelFrom}`}
            className={cn([
              styles.datePopoverButton,
              state === 'error' && styles.error,
              state === 'success' && styles.success,
            ])}
          >
            {labelFrom}
          </Button>
        }
      >
        <div>
          <strong>Calendar (from)</strong>
          <Calendar
            value={value.from instanceof Date ? value.from : null}
            onChange={(date) => onChange({ ...value, from: date })}
          />
        </div>
      </Popover>
      <div className={styles.text}>
        <Icon name="chevronRight" />
      </div>
      <Popover
        trigger={
          <Button
            title={`Update needed: ${labelTo}`}
            className={cn([
              styles.datePopoverButton,
              state === 'error' && styles.error,
              state === 'success' && styles.success,
            ])}
          >
            {labelTo}
          </Button>
        }
      >
        <div>
          <strong>Calendar (to)</strong>
          <Calendar
            value={value.to instanceof Date ? value.to : null}
            onChange={(date) => onChange({ ...value, to: date })}
          />
        </div>
      </Popover>
    </div>
  );
};
