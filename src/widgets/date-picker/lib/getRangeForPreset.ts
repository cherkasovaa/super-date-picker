import type { DateRange } from '@/shared/types/date';
import type { PresetKey } from '@/widgets/date-picker/model/presets';
import {
  endOfToday,
  endOfYesterday,
  startOfMonth,
  startOfToday,
  startOfWeek,
  startOfYear,
  startOfYesterday,
  subMonths,
  subWeeks,
  subYears,
} from 'date-fns';

export const getRangeForPreset = (key: PresetKey): DateRange => {
  switch (key) {
    case 'today':
      return {
        from: startOfToday(),
        to: endOfToday(),
      };
    case 'yesterday':
      return {
        from: startOfYesterday(),
        to: endOfYesterday(),
      };
    case 'thisWeek':
      return {
        from: startOfWeek(new Date(), { weekStartsOn: 1 }),
        to: endOfToday(),
      };
    case 'thisMonth':
      return {
        from: startOfMonth(new Date()),
        to: endOfToday(),
      };
    case 'thisYear':
      return {
        from: startOfYear(new Date()),
        to: endOfToday(),
      };
    case 'weekToToday':
      return {
        from: subWeeks(startOfToday(), 1),
        to: endOfToday(),
      };
    case 'monthToToday':
      return {
        from: subMonths(startOfToday(), 1),
        to: endOfToday(),
      };
    case 'yearToToday':
      return {
        from: subYears(startOfToday(), 1),
        to: endOfToday(),
      };
    default:
      return {
        from: startOfToday(),
        to: endOfToday(),
      };
  }
};
