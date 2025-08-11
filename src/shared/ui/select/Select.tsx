import type { SelectProps } from '@/shared/ui/select/types';
import styles from './Select.module.css';

export const Select = ({ value, label, onChange, children }: SelectProps) => {
  return (
    <select className={styles.select} onChange={onChange} aria-label={label} value={value}>
      {children}
    </select>
  );
};
