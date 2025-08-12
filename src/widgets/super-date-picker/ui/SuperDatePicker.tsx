import type { ValidationState } from '@/shared/types/validation';
import { Button, Icon, Popover } from '@/shared/ui';
import { compareDates } from '@/shared/utils/compareDates';
import { DatePickerPresets } from '@/widgets/date-picker/ui/DatePickerPresets/DatePickerPresets';
import { DatePickerRange } from '@/widgets/date-picker/ui/DatePickerRange';
import type { SuperDatePickerProps } from '@/widgets/super-date-picker/model/types';
import { useEffect, useState } from 'react';
import styles from './SuperDatePicker.module.css';

export const SuperDatePicker = ({ value, appliedValue, onChange, onUpdate }: SuperDatePickerProps) => {
  const [activePopover, setActivePopover] = useState<'presets' | 'from' | 'to' | null>(null);
  const [validation, setValidation] = useState<ValidationState>('default');

  const hasChanges = !compareDates(value.from, appliedValue.from) || !compareDates(value.to, appliedValue.to);

  useEffect(() => {
    if (!value.from || !value.to) {
      setValidation('default');
      return;
    }

    setValidation(value.from <= value.to ? 'success' : 'error');
  }, [value]);

  const closePopover = () => setActivePopover(null);

  return (
    <div className={styles.wrapper}>
      <Popover
        isOpen={activePopover === 'presets'}
        onClose={closePopover}
        trigger={
          <Button
            title="Date quick select"
            onClick={() => setActivePopover(activePopover === 'presets' ? null : 'presets')}
            className={styles.buttonPresets}
          >
            <Icon name="calendar" />
            <Icon name="chevronDown" />
          </Button>
        }
      >
        <DatePickerPresets onSelect={onChange} />
      </Popover>

      <DatePickerRange
        activePopover={activePopover}
        setActivePopover={setActivePopover}
        value={value}
        onChange={onChange}
        state={validation}
      />
      <Button state={validation} disabled={validation === 'error' || !hasChanges} onClick={onUpdate}>
        {hasChanges ? 'Update' : 'Refresh'}
      </Button>
    </div>
  );
};
