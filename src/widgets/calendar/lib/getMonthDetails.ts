interface MonthDetails {
  numberOfDays: number;
  firstDay: number;
}

export const getMonthDetails = (year: number, month: number): MonthDetails => {
  const firstDayRaw = new Date(year, month).getDay();

  const firstDay = firstDayRaw === 0 ? 6 : firstDayRaw - 1;

  return {
    numberOfDays: new Date(year, month + 1, 0).getDate(),
    firstDay,
  };
};
