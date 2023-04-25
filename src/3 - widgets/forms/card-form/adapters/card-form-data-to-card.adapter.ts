import { CardFormData } from '@widgets/forms/card-form/card-form.types';
import { ICard } from '@entities/card/types';
import {
  cardMonthPattern,
  cardNumberPattern,
  cardOwnerPattern,
  cardYearPattern
} from '@entities/card/utils';

export const cardFormDataToCardAdapter = (
  cardFormData: CardFormData
): Omit<ICard, 'id' | 'status'> => ({
  number: cardNumberPattern(cardFormData.number),
  owner: cardOwnerPattern(cardFormData.owner),
  validityDate: cardMonthPattern(cardFormData.month) + '/' + cardYearPattern(cardFormData.year)
});
