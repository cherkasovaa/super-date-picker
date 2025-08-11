import type { ValidationState } from '@/shared/types/validation';
import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  state?: ValidationState;
};
