import type { DateInput } from '@/shared/types/date';

export const formatLabel = (value?: DateInput, locales: Intl.LocalesArgument = 'ru-RU'): string | null => {
  if (!value) return null;
  if (value instanceof Date) {
    const date = value.toLocaleDateString(locales);
    const time = value.toLocaleTimeString(locales);

    return `${date} @ ${time}`;
  }
  return value;
};
