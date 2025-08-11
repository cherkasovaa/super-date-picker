import type { DateInput } from '@/shared/types/date';

export const formatLabel = (value?: DateInput): string | null => {
  if (!value) return null;
  if (value instanceof Date) return value.toLocaleDateString('ru-RU');
  return value;
};
