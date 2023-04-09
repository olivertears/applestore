import { ICard } from '../../interfaces';

export interface ICardService {
  cards$: ICard[];
  addCard: (addCardData: Omit<ICard, 'id' | 'isActive'>) => void;
  deleteCard: (id: number) => void;
  getCards: () => void;
  updateCard: (updateCardData: Omit<ICard, 'isActive'>) => void;
  setActive: (id: number) => void;
}
