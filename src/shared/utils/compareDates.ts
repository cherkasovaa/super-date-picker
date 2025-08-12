import type { DateInput } from '@/shared/types/date';

export const compareDates = (a: DateInput, b: DateInput): boolean => {
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (!(a instanceof Date) && !(b instanceof Date)) {
    return a === b;
  }

  return false;
};
