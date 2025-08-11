export interface CalendarDay {
  date: Date;
  dayOfMonth: number;
  isCurrentMonth: boolean;
}

export interface CalendarGridProps {
  days: CalendarDay[];
  onDayClick: (day: number) => void;
  selectedDate?: Date | null;
}

export interface CalendarHeaderProps {
  year: number;
  month: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export interface CalendarProps {
  value?: Date | null;
  onChange: (date: Date) => void;
}
