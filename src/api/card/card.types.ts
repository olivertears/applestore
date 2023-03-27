import { AxiosResponse } from 'axios';
import { ICard } from '../../interfaces';

export interface ICardApi {
  endpoint: 'cards';
  addCard: (addCardData: ICard) => Promise<AxiosResponse<ICard>>;
  deleteCard: (id: string) => Promise<AxiosResponse>;
  getCards: () => Promise<AxiosResponse<ICard[]>>;
  updateCard: (updateCardData: ICard) => Promise<AxiosResponse<ICard>>;
}
