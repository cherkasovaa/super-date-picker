import type { PanelProps } from '@/shared/ui/panel/types';
import { forwardRef } from 'react';
import styles from './Panel.module.css';

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      type = 'inline',
      placement = 'bottom',
      align = 'start',
      offset = 8,
      shiftX = 0,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const isPopover = type === 'popover';

    const panelClasses = [
      styles.panel,
      isPopover ? styles.popoverPanel : '',
      isPopover && placement === 'bottom' ? styles.placeBottom : styles.placeTop,
      isPopover && align === 'start' ? styles.alignStart : styles.alignEnd,
      className,
    ].join(' ');

    const styleVars = {
      ['--panel-offset']: `${offset}px`,
      ['--panel-shift-x']: `${shiftX}px`,
    } as React.CSSProperties;

    return (
      <div ref={ref} className={panelClasses} style={styleVars} role={isPopover ? 'dialog' : 'contentinfo'} {...rest}>
        {children}
      </div>
    );
  }
);
