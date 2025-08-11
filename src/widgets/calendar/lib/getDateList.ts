export const getDateList = (
  type: 'month' | 'weekday' = 'month',
  format: 'long' | 'short' = 'long',
  locale = 'ru'
): string[] => {
  const date = new Date().getFullYear();

  const formatter = new Intl.DateTimeFormat(locale, {
    [type]: format,
  });

  if (type === 'month') {
    return Array.from({ length: 12 }, (_, month) => formatter.format(new Date(date, month, 1)));
  }

  return Array.from({ length: 7 }, (_, day) => formatter.format(new Date(date, 0, 6 + day)));
};
