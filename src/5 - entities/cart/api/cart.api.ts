import { AxiosResponse } from 'axios';
import { privateApi } from '@shared/constants/api';
import { ICartProduct } from '../types';
import { ICartApi } from './cart.types';

class CartApi implements ICartApi {
  endpoint = 'carts' as const;

  addToCart(cart: Omit<ICartProduct, 'id'>): Promise<AxiosResponse<ICartProduct>> {
    return privateApi.post(this.endpoint, cart);
  }

  deleteFromCart(id: string): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint + '/' + id);
  }

  getCartProducts(): Promise<AxiosResponse<ICartProduct[]>> {
    return privateApi.get(this.endpoint);
  }
}

export const cartApi = new CartApi();
