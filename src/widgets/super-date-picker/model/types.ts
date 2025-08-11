import type { DateRange } from '@/shared/types/date';

export interface SuperDatePickerProps {
  value: DateRange;
  onChange: (next: DateRange) => void;
}
