import { InputHTMLAttributes } from 'react';

export interface ColorInputProps extends InputHTMLAttributes<HTMLInputElement> {
  color: string;
}
