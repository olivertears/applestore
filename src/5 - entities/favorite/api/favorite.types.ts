import { AxiosResponse } from 'axios';
import { IFavorite } from '../types';

export interface IFavoriteApi {
  endpoint: 'favorites';
  addFavorite: (productId: string) => Promise<AxiosResponse<IFavorite>>;
  deleteFavorite: (id: string) => Promise<AxiosResponse>;
  getFavorites: () => Promise<AxiosResponse<IFavorite[]>>;
  updateFavorite: (updateFavoriteData: IFavorite) => Promise<AxiosResponse<IFavorite>>;
}
