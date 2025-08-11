import { Button, Icon, Popover } from '@/shared/ui';
import { formatLabel } from '@/shared/utils/formatLabel';
import type { DatePickerRangeProps } from '@/widgets/date-picker/model/types';
import styles from './DatePickerRange.module.css';

export const DatePickerRange = ({
  value,
  // onChange,
  placeholderFrom = 'Choose start date',
  placeholderTo = 'Choose end date',
}: DatePickerRangeProps) => {
  const labelFrom = formatLabel(value.from) ?? placeholderFrom;
  const labelTo = formatLabel(value.to) ?? placeholderTo;

  return (
    <div className={styles.wrapper}>
      <Popover
        trigger={
          <Button title={`Update needed: ${labelFrom}`} className={styles.datePopoverButton}>
            {labelFrom}
          </Button>
        }
      >
        <div style={{ minWidth: 280 }}>
          <strong>Calendar (from)</strong>
          <div style={{ marginTop: 8, opacity: 0.7 }}>Calendar will be here soon</div>
        </div>
      </Popover>
      <div className={styles.text}>
        <Icon name="chevronRight" />
      </div>
      <Popover
        trigger={
          <Button title={`Update needed: ${labelTo}`} className={styles.datePopoverButton}>
            {labelTo}
          </Button>
        }
      >
        <div style={{ minWidth: 280 }}>
          <strong>Calendar (to)</strong>
          <div style={{ marginTop: 8, opacity: 0.7 }}>Calendar will be here soon</div>
        </div>
      </Popover>
    </div>
  );
};
