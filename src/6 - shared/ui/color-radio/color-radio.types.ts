import { InputHTMLAttributes } from 'react';

export interface ColorRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  color: string;
  selectedValue: string;
}
