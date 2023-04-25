import { ICard } from '../types';

export interface ICardService {
  cards$: ICard[];
  addCard: (addCardData: Omit<ICard, 'id' | 'status'>) => void;
  deleteCard: (id: number) => void;
  getCards: () => void;
  updateCard: (updateCardData: Omit<ICard, 'status'>) => void;
  setActive: (id: number) => void;
}
