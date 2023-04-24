import { action, makeObservable, observable } from 'mobx';
import { favoriteApi } from '@entities/favorite/api';
import { IFavorite } from '../../interfaces';
import { IFavoriteService } from './favorite.types';

class FavoriteService implements IFavoriteService {
  favorites$: IFavorite[] = [];

  constructor() {
    makeObservable(this, {
      favorites$: observable,
      setFavorites: action
    });
  }

  setFavorites(favorites: IFavorite[]) {
    this.favorites$ = favorites;
  }

  async addFavorite(productId: string) {
    const { data } = await favoriteApi.addFavorite(productId);
    this.setFavorites([...this.favorites$, data]);
  }

  async deleteFavorite(id: string) {
    await favoriteApi.deleteFavorite(id);
    this.setFavorites(this.favorites$.filter((item) => item.id !== id));
  }

  async getFavorites() {
    const { data } = await favoriteApi.getFavorites();
    this.setFavorites(data);
  }

  async updateFavorite(updateFavoriteData: IFavorite) {
    const { data } = await favoriteApi.updateFavorite(updateFavoriteData);
    this.setFavorites(
      this.favorites$.map((item) => (item.id === updateFavoriteData.id ? data : item))
    );
  }
}

export const favoriteService = new FavoriteService();
