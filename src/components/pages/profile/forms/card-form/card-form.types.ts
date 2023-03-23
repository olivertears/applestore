import { ICard } from '../../../../../interfaces';

export interface CardFormProps {
  card?: ICard;
}

export interface CardFormValues {
  number: string;
  owner: string;
  month: string;
  year: string;
}
