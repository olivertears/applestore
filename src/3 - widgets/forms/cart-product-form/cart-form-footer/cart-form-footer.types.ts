import { IOrderProduct } from '@entities/order/types';

export interface CartFormFooterProps {
  products?: IOrderProduct[];
  showModal: () => void;
}
