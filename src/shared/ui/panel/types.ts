import type { ReactNode } from 'react';

export type PanelType = 'popover' | 'inline';
export type PanelPlacement = 'top' | 'bottom';
export type PanelAlign = 'start' | 'end';

export interface PanelProps {
  children: ReactNode;
  className?: string;
  type?: PanelType;
  placement?: PanelPlacement;
  align?: PanelAlign;
  offset?: number;
  shiftX?: number;
}
