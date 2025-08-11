import type { DateRange } from '@/shared/types/date';
import type { ValidationState } from '@/shared/types/validation';

export interface DatePickerRangeProps {
  value: DateRange;
  onChange: (next: DateRange) => void;
  state: ValidationState;
}
