export const generateTimeList = (step: number): string[] => {
  const time = (24 * 60) / step;

  return Array.from({ length: time }, (_, i) => {
    const totalMin = step * i;
    const hh = String(Math.floor(totalMin / 60)).padStart(2, '0');
    const mm = String(totalMin % 60).padStart(2, '0');

    return `${hh}:${mm}`;
  });
};
