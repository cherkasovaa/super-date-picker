import type { DateRange } from '@/shared/types/date';

export interface SuperDatePickerProps {
  value: DateRange;
  appliedValue: DateRange;
  onChange: (next: DateRange) => void;
  onUpdate: () => void;
}
