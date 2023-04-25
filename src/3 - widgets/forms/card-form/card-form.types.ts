import { ICard } from '@entities/card/types';

export interface CardFormProps {
  card?: ICard;
  hideModal: () => void;
}

export interface CardFormData {
  number: string;
  owner: string;
  month: string;
  year: string;
}
