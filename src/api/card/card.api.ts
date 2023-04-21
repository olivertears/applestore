import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { ICard } from '../../interfaces';
import { ICardApi } from './card.types';

class CardApi implements ICardApi {
  endpoint = 'cards' as const;

  addCard(addCardData: Omit<ICard, 'id' | 'status'>): Promise<AxiosResponse<ICard>> {
    return privateApi.post(this.endpoint, addCardData);
  }

  deleteCard(id: number): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint + '/' + id);
  }

  getCards(): Promise<AxiosResponse<ICard[]>> {
    return privateApi.get(this.endpoint);
  }

  updateCard(updateCardData: Omit<ICard, 'status'>): Promise<AxiosResponse<ICard>> {
    return privateApi.post(this.endpoint, updateCardData);
  }

  setActive(id: number): Promise<AxiosResponse<ICard[]>> {
    return privateApi.put(this.endpoint + '/' + id + '/setActive');
  }
}

export const cardApi = new CardApi();
