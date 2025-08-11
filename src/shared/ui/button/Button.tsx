import type { ButtonProps } from '@/shared/ui/button/types';
import { cn } from '@/shared/utils/cn';
import styles from './Button.module.css';

export const Button = ({ children, className, state = 'default', ...rest }: ButtonProps) => {
  return (
    <button
      className={cn([
        styles.button,
        className,
        state === 'error' && styles.error,
        state === 'success' && styles.success,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
};
