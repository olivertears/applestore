import { ICard } from '../../../../interfaces';
import { CardFormData } from '../forms/card-form/card-form.types';
import { cardMonthPattern, cardNumberPattern, cardOwnerPattern, cardYearPattern } from '../utils';

export const cardFormDataToCardAdapter = (
  cardFormData: CardFormData
): Omit<ICard, 'id' | 'isActive'> => ({
  number: cardNumberPattern(cardFormData.number),
  owner: cardOwnerPattern(cardFormData.owner),
  validityDate: cardMonthPattern(cardFormData.month) + '/' + cardYearPattern(cardFormData.year)
});
