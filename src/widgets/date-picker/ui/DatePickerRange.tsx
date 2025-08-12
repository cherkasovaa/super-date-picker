import { Button, Icon, Popover } from '@/shared/ui';
import { cn } from '@/shared/utils/cn';
import { formatLabel } from '@/shared/utils/formatLabel';
import { Calendar } from '@/widgets/calendar';
import type { DatePickerRangeProps } from '@/widgets/date-picker/model/types';
import styles from './DatePickerRange.module.css';

export const DatePickerRange = ({ activePopover, setActivePopover, value, onChange, state }: DatePickerRangeProps) => {
  const labelFrom = formatLabel(value.from) ?? 'Choose start date';
  const labelTo = formatLabel(value.to) ?? 'Choose end date';

  const closePopover = () => setActivePopover(null);

  return (
    <div className={cn([styles.wrapper, state === 'error' && styles.error, state === 'success' && styles.success])}>
      <Popover
        isOpen={activePopover === 'from'}
        onClose={closePopover}
        className={styles.popover}
        trigger={
          <Button
            title={`Update needed: ${labelFrom}`}
            onClick={() => setActivePopover(activePopover === 'from' ? null : 'from')}
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
        isOpen={activePopover === 'to'}
        onClose={closePopover}
        className={styles.popover}
        trigger={
          <Button
            title={`Update needed: ${labelTo}`}
            onClick={() => setActivePopover(activePopover === 'to' ? null : 'to')}
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
