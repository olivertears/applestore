import { AxiosResponse } from 'axios';
import { ICard } from '../../interfaces';
import { api } from '../api';
import { ICardApi } from './card.types';

class CardApi implements ICardApi {
  endpoint = 'cards' as const;

  addCard(addCardData: ICard): Promise<AxiosResponse<ICard>> {
    return api.post(this.endpoint, addCardData);
  }

  deleteCard(id: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  getCards(): Promise<AxiosResponse<ICard[]>> {
    return api.get(this.endpoint);
  }

  updateCard(updateCardData: ICard): Promise<AxiosResponse<ICard>> {
    return api.post(this.endpoint, updateCardData);
  }
}

export const cardApi = new CardApi();
