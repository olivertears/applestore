import { IFavorite } from '../types';

export interface IFavoriteService {
  favorites$: IFavorite[];
  addFavorite: (productId: string) => void;
  deleteFavorite: (id: number) => void;
  getFavorites: () => void;
}
