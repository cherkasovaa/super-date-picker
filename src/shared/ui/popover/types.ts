import type { ReactElement, ReactNode } from 'react';

export type PopoverTriggerProps = React.HTMLAttributes<HTMLElement>;

export interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  trigger: ReactElement<PopoverTriggerProps>;
  children: ReactNode;
  offset?: number;
}
