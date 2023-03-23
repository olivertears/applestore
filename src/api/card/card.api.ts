import { AxiosResponse } from 'axios';
import { ICard } from '../../interfaces';
import { api } from '../api';
import { ICardApi } from './card.types';

class CardApi implements ICardApi {
  endpoint = 'cards' as const;

  addCard(card: ICard): Promise<AxiosResponse<ICard>> {
    return api.post(this.endpoint, card);
  }

  deleteCard(id: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  getCards(): Promise<AxiosResponse<ICard[]>> {
    return api.get(this.endpoint);
  }

  updateCard(card: ICard): Promise<AxiosResponse<ICard>> {
    return api.post(this.endpoint, card);
  }
}

export const userApi = new CardApi();
