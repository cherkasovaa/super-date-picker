import type { ChangeEvent, ReactNode } from 'react';

export interface SelectProps {
  value: number;
  label: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}
