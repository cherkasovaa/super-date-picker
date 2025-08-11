export type IconType = 'calendar' | 'chevronRight' | 'chevronLeft';

export interface IconProps {
  name: IconType;
  size?: number;
  className?: string;
  color?: string;
}
