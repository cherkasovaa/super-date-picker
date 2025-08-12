import type { DateInput } from '@/shared/types/date';

export const formatDateToISO = (date: DateInput | null) => {
  if (!date) return null;
  if (date instanceof Date) return date.toISOString();
  return date;
};
