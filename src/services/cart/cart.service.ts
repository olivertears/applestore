import { action, makeObservable, observable } from 'mobx';
import { cartApi } from '@entities/cart/api';
import { ICart } from '../../interfaces';
import { ICartService } from './cart.types';

class CartService implements ICartService {
  cart$: ICart[] = [];

  constructor() {
    makeObservable(this, {
      cart$: observable,
      setCart: action
    });
  }

  setCart(cart: ICart[]) {
    this.cart$ = cart;
  }

  async addToCart(productId: string) {
    const { data } = await cartApi.addToCart(productId);
    this.setCart([...this.cart$, data]);
  }

  async deleteFromCart(id: string) {
    await cartApi.deleteFromCart(id);
    this.setCart(this.cart$.filter((item) => item.id !== id));
  }

  async getCart() {
    const { data } = await cartApi.getCart();
    this.setCart(data);
  }

  async updateCart(updateCartItemData: ICart) {
    const { data } = await cartApi.updateCart(updateCartItemData);
    this.setCart(this.cart$.map((item) => (item.id === updateCartItemData.id ? data : item)));
  }
}

export const cartService = new CartService();
