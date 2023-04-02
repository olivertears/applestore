import { action, makeObservable, observable } from 'mobx';
import { Catch } from '../../utils';
import { cartApi } from '../../api/cart';
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

  @Catch
  async addToCart(productId: string) {
    const newCartItem = await cartApi.addToCart(productId);
    this.setCart([...this.cart$, newCartItem.data]);
  }

  @Catch
  async deleteFromCart(id: string) {
    await cartApi.deleteFromCart(id);
    this.setCart(this.cart$.filter((item) => item.id !== id));
  }

  @Catch
  async getCart() {
    const cart = await cartApi.getCart();
    this.setCart(cart.data);
  }

  @Catch
  async updateCart(updateCartItemData: ICart) {
    const updatedCartItem = await cartApi.updateCart(updateCartItemData);
    this.setCart(
      this.cart$.map((item) => (item.id === updateCartItemData.id ? updatedCartItem.data : item))
    );
  }
}

export const cartService = new CartService();
