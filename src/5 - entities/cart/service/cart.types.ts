import { ICartProduct } from '../types';

export interface ICartService {
  cart$: ICartProduct[];
  addToCart: (cart: Omit<ICartProduct, 'id'>) => void;
  deleteFromCart: (id: string) => void;
  getCartProducts: () => void;
}
