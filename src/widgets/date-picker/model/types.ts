import type { DateRange } from '@/shared/types/date';

export interface DatePickerRangeProps {
  value: DateRange;
  onChange: (next: DateRange) => void;
  placeholderFrom?: string;
  placeholderTo?: string;
}
