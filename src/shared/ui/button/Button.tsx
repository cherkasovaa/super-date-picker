import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export const Button = ({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`${styles.button} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
};
