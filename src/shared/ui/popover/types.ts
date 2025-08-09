import type { ReactElement, ReactNode } from 'react';

export type PopoverTriggerProps = React.HTMLAttributes<HTMLElement>;

export interface PopoverProps {
  trigger: ReactElement<PopoverTriggerProps>;
  children: ReactNode;
  offset?: number;
}
