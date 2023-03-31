import { InputHTMLAttributes } from 'react';

export interface FieldsetProps extends InputHTMLAttributes<HTMLInputElement> {
  column?: boolean;
}
