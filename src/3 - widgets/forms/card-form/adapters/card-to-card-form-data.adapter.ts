import { ICard } from '@entities/card/types';
import { CardFormData } from '@widgets/forms/card-form/card-form.types';
import { removeSpaces } from '@shared/utils';

export const cardToCardFormDataAdapter = (card?: ICard): CardFormData => ({
  number: removeSpaces(card?.number || ''),
  owner: card?.owner || '',
  month: card?.validityDate.split('/')[0] || '',
  year: card?.validityDate.split('/')[1] || ''
});
