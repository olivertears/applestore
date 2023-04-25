import { ICart } from '../types';

export interface ICartService {
  cart$: ICart[];
  addToCart: (productId: string) => void;
  deleteFromCart: (id: string) => void;
  getCart: () => void;
  updateCart: (updateCartItemData: ICart) => void;
}
