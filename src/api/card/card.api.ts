import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { ICard } from '../../interfaces';
import { ICardApi } from './card.types';

const api = createApi(true);

class CardApi implements ICardApi {
  endpoint = 'cards' as const;

  @Catch
  addCard(addCardData: Omit<ICard, 'id' | 'isActive'>): Promise<AxiosResponse<ICard>> {
    return api.post(this.endpoint, addCardData);
  }

  @Catch
  deleteCard(id: number): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  @Catch
  getCards(): Promise<AxiosResponse<ICard[]>> {
    return api.get(this.endpoint);
  }

  @Catch
  updateCard(updateCardData: Omit<ICard, 'isActive'>): Promise<AxiosResponse<ICard>> {
    return api.post(this.endpoint, updateCardData);
  }

  setActive(id: number): Promise<AxiosResponse<ICard>> {
    return api.put(this.endpoint + '/' + id + '/setActive');
  }
}

export const cardApi = new CardApi();
