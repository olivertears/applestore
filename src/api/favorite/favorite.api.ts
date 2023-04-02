import { AxiosResponse } from 'axios';
import { createApi } from '../../utils/createApi';
import { IFavorite } from '../../interfaces';
import { IFavoriteApi } from './favorite.types';

const api = createApi(true);

class FavoriteApi implements IFavoriteApi {
  endpoint = 'favorites' as const;

  addFavorite(productId: string): Promise<AxiosResponse<IFavorite>> {
    return api.post(this.endpoint, productId);
  }

  deleteFavorite(id: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  getFavorites(): Promise<AxiosResponse<IFavorite[]>> {
    return api.get(this.endpoint);
  }

  updateFavorite(updateFavoriteData: IFavorite): Promise<AxiosResponse<IFavorite>> {
    return api.post(this.endpoint, updateFavoriteData);
  }
}

export const favoriteApi = new FavoriteApi();
