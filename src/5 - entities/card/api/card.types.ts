import { AxiosResponse } from 'axios';
import { ICard } from '../../../interfaces';

export interface ICardApi {
  endpoint: 'cards';
  addCard: (addCardData: Omit<ICard, 'id' | 'isActive'>) => Promise<AxiosResponse<ICard>>;
  deleteCard: (id: number) => Promise<AxiosResponse>;
  getCards: () => Promise<AxiosResponse<ICard[]>>;
  updateCard: (updateCardData: Omit<ICard, 'isActive'>) => Promise<AxiosResponse<ICard>>;
  setActive: (id: number) => Promise<AxiosResponse<ICard[]>>;
}
