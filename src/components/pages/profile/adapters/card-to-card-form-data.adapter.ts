import { ICard } from '../../../../interfaces';
import { removeSpaces } from '../../../../utils';
import { CardFormData } from '../forms/card-form/card-form.types';

export const cardToCardFormDataAdapter = (card?: ICard): CardFormData => ({
  number: removeSpaces(card?.number || ''),
  owner: card?.owner || '',
  month: card?.validityDate.split('/')[0] || '',
  year: card?.validityDate.split('/')[1] || ''
});
