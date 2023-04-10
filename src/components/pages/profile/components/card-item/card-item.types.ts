import { CardFormData } from '../../forms/card-form/card-form.types';

export interface CardItemProps {
  card: CardFormData;
  onClick?: () => void;
  isActive?: boolean;
}
