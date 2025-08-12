export interface TimePickerProps {
  step?: number;
  value?: Date | null;
  onChange: (date: Date) => void;
}
