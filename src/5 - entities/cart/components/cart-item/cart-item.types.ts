import { ICartProduct } from '@entities/cart/types';

export interface CartItemProps {
  cartItem: ICartProduct;
  index: number;
  remove: () => void;
}
