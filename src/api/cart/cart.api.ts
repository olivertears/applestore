import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { ICart } from '../../interfaces';
import { ICartApi } from './cart.types';

const api = () => createApi(true);

class CartApi implements ICartApi {
  endpoint = 'carts' as const;

  @Catch
  addToCart(productId: string): Promise<AxiosResponse<ICart>> {
    return api().post(this.endpoint, productId);
  }

  @Catch
  deleteFromCart(id: string): Promise<AxiosResponse> {
    return api().delete(this.endpoint + '/' + id);
  }

  @Catch
  getCart(): Promise<AxiosResponse<ICart[]>> {
    return api().get(this.endpoint);
  }

  @Catch
  updateCart(updateCartItemData: ICart): Promise<AxiosResponse<ICart>> {
    return api().post(this.endpoint, updateCartItemData);
  }
}

export const cartApi = new CartApi();
