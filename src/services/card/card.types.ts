import { ICard } from '../../interfaces';

export interface ICardService {
  cards$: ICard[];
  addCard: (addCardData: ICard) => void;
  deleteCard: (id: string) => void;
  getCards: () => void;
  updateCard: (updateCardData: ICard) => void;
}
