import { action, makeObservable, observable } from 'mobx';
import { cartApi } from '@entities/cart/api';
import { ICartProduct } from '../types';
import { ICartService } from './cart.types';

class CartService implements ICartService {
  cart$: ICartProduct[] = [];

  constructor() {
    makeObservable(this, {
      cart$: observable,
      setCart: action
    });
  }

  setCart(cart: ICartProduct[]) {
    this.cart$ = cart;
  }

  async addToCart(cart: Omit<ICartProduct, 'id'>) {
    const { data } = await cartApi.addToCart(cart);
    this.setCart([...this.cart$, data]);
  }

  async deleteFromCart(id: string) {
    await cartApi.deleteFromCart(id);
    this.setCart(this.cart$.filter((item) => item.id !== id));
  }

  async getCartProducts() {
    const { data } = await cartApi.getCartProducts();
    this.setCart(data);
  }
}

export const cartService = new CartService();
