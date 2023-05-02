import { AxiosResponse } from 'axios';
import { ICartProduct } from '../types';

export interface ICartApi {
  endpoint: 'carts';
  addToCart: (cart: Omit<ICartProduct, 'id'>) => Promise<AxiosResponse<ICartProduct>>;
  deleteFromCart: (id: string) => Promise<AxiosResponse>;
  getCartProducts: () => Promise<AxiosResponse<ICartProduct[]>>;
}
