export type IconType = 'calendar' | 'chevronRight' | 'chevronLeft' | 'chevronDown';

export interface IconProps {
  name: IconType;
  size?: number;
  className?: string;
  color?: string;
}
