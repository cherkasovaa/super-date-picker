import { Panel } from '@/shared/ui';
import type { PanelAlign, PanelPlacement } from '@/shared/ui/panel/types';
import type { PopoverProps } from '@/shared/ui/popover/types';
import { cn } from '@/shared/utils/cn';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Popover.module.css';

export const Popover = ({ isOpen, onClose, trigger, children, className = '', offset = 8 }: PopoverProps) => {
  const [placement, setPlacement] = useState<PanelPlacement>('bottom');
  const [align, setAlign] = useState<PanelAlign>('start');
  const [shiftX, setShiftX] = useState<number>(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      const isInsideClick = rootRef.current?.contains(target) || panelRef.current?.contains(target);

      if (!isInsideClick) onClose();
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useLayoutEffect(() => {
    if (!isOpen) return;

    const position = () => {
      const root = rootRef.current;
      const wrap = triggerRef.current;
      const panel = panelRef.current;

      if (!root || !wrap || !panel) return;

      const rRect = root.getBoundingClientRect();
      const tRect = wrap.getBoundingClientRect();

      const pW = panel.offsetWidth;
      const pH = panel.offsetHeight;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const spaceBelow = vh - tRect.bottom;
      const spaceAbove = tRect.top;

      const placement: PanelPlacement = spaceBelow < pH + offset && spaceAbove > spaceBelow ? 'top' : 'bottom';

      let nextAlign: PanelAlign = align;
      const spaceRight = vw - tRect.left;
      const spaceLeft = tRect.right;

      if (pW >= spaceRight && spaceLeft > spaceRight) {
        nextAlign = 'end';
      }

      const margin = 8;
      const expectedLeft = nextAlign === 'start' ? rRect.left : rRect.right - pW;

      let dx = 0;
      const overflowRight = expectedLeft + pW + margin - vw;
      const overflowLeft = margin - expectedLeft;

      if (overflowRight > 0) dx -= overflowRight;
      if (overflowLeft > 0) dx += overflowLeft;

      setPlacement(placement);
      setAlign(nextAlign);
      setShiftX(dx);
    };

    position();

    const onResize = () => position();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen, offset, align]);

  return (
    <div ref={rootRef} className={cn([styles.popover, className])}>
      <div ref={triggerRef} className={cn([styles.trigger, isOpen && styles.triggerOpen])}>
        {trigger}
      </div>

      {isOpen && (
        <Panel ref={panelRef} type="popover" offset={offset} align={align} shiftX={shiftX} placement={placement}>
          {children}
        </Panel>
      )}
    </div>
  );
};
