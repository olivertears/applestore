import { CardFormValues } from '../../forms/card-form/card-form.types';

export interface CardItemProps {
  card: CardFormValues;
  onClick?: () => void;
  isActive?: boolean;
}
