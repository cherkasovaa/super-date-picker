import type { DateRange } from '@/shared/types/date';
import type { ValidationState } from '@/shared/types/validation';

export interface DatePickerRangeProps {
  activePopover: 'presets' | 'from' | 'to' | null;
  setActivePopover: React.Dispatch<React.SetStateAction<'presets' | 'from' | 'to' | null>>;
  value: DateRange;
  onChange: (next: DateRange) => void;
  state: ValidationState;
}

export interface DatePickerPresetsProps {
  onSelect: (range: DateRange) => void;
}
