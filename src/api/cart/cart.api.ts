import { AxiosResponse } from 'axios';
import { createApi } from '../../utils/createApi';
import { ICart } from '../../interfaces';
import { ICartApi } from './cart.types';

const api = createApi(true);

class CartApi implements ICartApi {
  endpoint = 'carts' as const;

  addToCart(productId: string): Promise<AxiosResponse<ICart>> {
    return api.post(this.endpoint, productId);
  }

  deleteFromCart(id: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  getCart(): Promise<AxiosResponse<ICart[]>> {
    return api.get(this.endpoint);
  }

  updateCart(updateCartItemData: ICart): Promise<AxiosResponse<ICart>> {
    return api.post(this.endpoint, updateCartItemData);
  }
}

export const cartApi = new CartApi();
