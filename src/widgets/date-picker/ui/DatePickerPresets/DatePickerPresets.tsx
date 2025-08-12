import { Button } from '@/shared/ui';
import { getRangeForPreset } from '@/widgets/date-picker/lib/getRangeForPreset';
import { PRESETS, type PresetKey } from '@/widgets/date-picker/model/presets';
import type { DatePickerPresetsProps } from '@/widgets/date-picker/model/types';
import styles from './DatePickerPresets.module.css';

export const DatePickerPresets = ({ onSelect }: DatePickerPresetsProps) => {
  const handleSelectPreset = (key: PresetKey) => {
    const range = getRangeForPreset(key);
    onSelect(range);
  };

  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>Commonly used Today</legend>
      <div className={styles.container}>
        {PRESETS.map(({ label, key }) => (
          <Button key={key} onClick={() => handleSelectPreset(key)} className={styles.link}>
            {label}
          </Button>
        ))}
      </div>
    </fieldset>
  );
};
