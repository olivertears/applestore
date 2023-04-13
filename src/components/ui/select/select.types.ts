import { ChangeEventHandler } from 'react';

export interface SelectProps {
  label: string;
  children: JSX.Element[];
  value: string | undefined;
  onSelect: (value: string) => void;
  required?: boolean;
  search?: SearchProps;
}

export interface SearchProps {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isLoading?: boolean;
}
