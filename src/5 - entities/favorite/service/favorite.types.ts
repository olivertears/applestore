import { IFavorite } from '../types';

export interface IFavoriteService {
  favorites$: IFavorite[];
  addFavorite: (productId: string) => void;
  deleteFavorite: (id: string) => void;
  getFavorites: () => void;
  updateFavorite: (updateFavoriteData: IFavorite) => void;
}
