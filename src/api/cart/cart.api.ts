import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { ICart } from '../../interfaces';
import { ICartApi } from './cart.types';

class CartApi implements ICartApi {
  endpoint = 'carts' as const;

  addToCart(productId: string): Promise<AxiosResponse<ICart>> {
    return privateApi.post(this.endpoint, productId);
  }

  deleteFromCart(id: string): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint + '/' + id);
  }

  getCart(): Promise<AxiosResponse<ICart[]>> {
    return privateApi.get(this.endpoint);
  }

  updateCart(updateCartItemData: ICart): Promise<AxiosResponse<ICart>> {
    return privateApi.post(this.endpoint, updateCartItemData);
  }
}

export const cartApi = new CartApi();
