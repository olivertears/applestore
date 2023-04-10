import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IFavorite } from '../../interfaces';
import { IFavoriteApi } from './favorite.types';

const api = () => createApi(true);

class FavoriteApi implements IFavoriteApi {
  endpoint = 'favorites' as const;

  @Catch
  addFavorite(productId: string): Promise<AxiosResponse<IFavorite>> {
    return api().post(this.endpoint, productId);
  }

  @Catch
  deleteFavorite(id: string): Promise<AxiosResponse> {
    return api().delete(this.endpoint + '/' + id);
  }

  @Catch
  getFavorites(): Promise<AxiosResponse<IFavorite[]>> {
    return api().get(this.endpoint);
  }

  @Catch
  updateFavorite(updateFavoriteData: IFavorite): Promise<AxiosResponse<IFavorite>> {
    return api().post(this.endpoint, updateFavoriteData);
  }
}

export const favoriteApi = new FavoriteApi();
