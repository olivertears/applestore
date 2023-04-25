import { InputHTMLAttributes } from 'react';

export interface OptionRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  selectedValue: string;
}
