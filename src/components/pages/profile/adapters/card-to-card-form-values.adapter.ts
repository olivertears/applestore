import { CardFormValues } from '../forms/card-form/card-form.types';
import { ICard } from '../../../../interfaces';
import { removeSpaces } from '../../../../utils';

export const cardToCardFormValuesAdapter = (card?: ICard): CardFormValues => ({
  number: removeSpaces(card?.number || ''),
  owner: card?.owner || '',
  month: card?.validityDate.split('/')[0] || '',
  year: card?.validityDate.split('/')[1] || ''
});
