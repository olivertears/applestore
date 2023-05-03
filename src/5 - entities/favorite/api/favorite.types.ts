import { AxiosResponse } from 'axios';
import { IFavorite } from '../types';

export interface IFavoriteApi {
  endpoint: 'favorites';
  addFavorite: (productId: string) => Promise<AxiosResponse<IFavorite>>;
  deleteFavorite: (id: number) => Promise<AxiosResponse>;
  getFavorites: () => Promise<AxiosResponse<IFavorite[]>>;
}
