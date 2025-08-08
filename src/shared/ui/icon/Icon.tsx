import Calendar from '@/shared/assets/icons/calendar-days.svg?react';
import ChevronRight from '@/shared/assets/icons/chevron-right.svg?react';
import type { IconProps, IconType } from './types';

const iconMap: Record<IconType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  calendar: Calendar,
  chevronRight: ChevronRight,
};

export const Icon = ({ name, size = 16, className = '', color = 'currentColor' }: IconProps) => {
  const Component = iconMap[name];

  if (!Component) return;

  return <Component width={size} height={size} stroke={color} className={className} />;
};
