import { action, makeObservable, observable } from 'mobx';
import { cartApi } from '../../api/cart';
import { Catch } from '../../utils';
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

  @Catch
  async addFavorite(productId: string) {
    const newFavorite = await cartApi.addToCart(productId);
    this.setFavorites([...this.favorites$, newFavorite.data]);
  }

  @Catch
  async deleteFavorite(id: string) {
    await cartApi.deleteFromCart(id);
    this.setFavorites(this.favorites$.filter((item) => item.id !== id));
  }

  @Catch
  async getFavorites() {
    const cart = await cartApi.getCart();
    this.setFavorites(cart.data);
  }

  @Catch
  async updateFavorite(updateFavoriteData: IFavorite) {
    const updatedFavorite = await cartApi.updateCart(updateFavoriteData);
    this.setFavorites(
      this.favorites$.map((item) =>
        item.id === updateFavoriteData.id ? updatedFavorite.data : item
      )
    );
  }
}

export const favoriteService = new FavoriteService();
