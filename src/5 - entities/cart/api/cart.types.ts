import { AxiosResponse } from 'axios';
import { ICart } from '../types';

export interface ICartApi {
  endpoint: 'carts';
  addToCart: (productId: string) => Promise<AxiosResponse<ICart>>;
  deleteFromCart: (id: string) => Promise<AxiosResponse>;
  getCart: () => Promise<AxiosResponse<ICart[]>>;
  updateCart: (updateCartItemData: ICart) => Promise<AxiosResponse<ICart>>;
}
