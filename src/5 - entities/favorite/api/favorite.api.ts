import { AxiosResponse } from 'axios';
import { privateApi } from '@shared/constants/api';
import { IFavorite } from '../types';
import { IFavoriteApi } from './favorite.types';

class FavoriteApi implements IFavoriteApi {
  endpoint = 'favorites' as const;

  addFavorite(productId: string): Promise<AxiosResponse<IFavorite>> {
    return privateApi.post(this.endpoint, { productId });
  }

  deleteFavorite(id: number): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint + '/' + id);
  }

  getFavorites(): Promise<AxiosResponse<IFavorite[]>> {
    return privateApi.get(this.endpoint);
  }
}

export const favoriteApi = new FavoriteApi();
