import { ICart } from '../../interfaces';

export interface ICartService {
  cart$: ICart[];
  addToCart: (productId: string) => void;
  deleteFromCart: (id: string) => void;
  getCart: () => void;
  updateCart: (updateCartItemData: ICart) => void;
}
