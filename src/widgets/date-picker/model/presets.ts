export type PresetKey =
  | 'today'
  | 'yesterday'
  | 'thisWeek'
  | 'thisMonth'
  | 'thisYear'
  | 'weekToToday'
  | 'monthToToday'
  | 'yearToToday';

export const PRESETS: { label: string; key: PresetKey }[] = [
  {
    label: 'Today',
    key: 'today',
  },
  {
    label: 'Yesterday',
    key: 'yesterday',
  },
  {
    label: 'This week',
    key: 'thisWeek',
  },
  {
    label: 'This month',
    key: 'thisMonth',
  },
  {
    label: 'This year',
    key: 'thisYear',
  },
  {
    label: 'Week to today',
    key: 'weekToToday',
  },
  {
    label: 'Month to today',
    key: 'monthToToday',
  },
  {
    label: 'Year to today',
    key: 'yearToToday',
  },
];
