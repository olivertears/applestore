import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { ICard } from '../../interfaces';
import { ICardApi } from './card.types';

const api = createApi(true);

class CardApi implements ICardApi {
  endpoint = 'cards' as const;

  @Catch
  addCard(addCardData: ICard): Promise<AxiosResponse<ICard>> {
    return api.post(this.endpoint, addCardData);
  }

  @Catch
  deleteCard(id: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  @Catch
  getCards(): Promise<AxiosResponse<ICard[]>> {
    return api.get(this.endpoint);
  }

  @Catch
  updateCard(updateCardData: ICard): Promise<AxiosResponse<ICard>> {
    return api.post(this.endpoint, updateCardData);
  }
}

export const cardApi = new CardApi();
