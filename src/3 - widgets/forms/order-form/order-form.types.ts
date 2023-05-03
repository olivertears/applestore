import { IOrderProduct } from '@entities/order/types';

export interface OrderFormProps {
  finalPrice: number;
  products: IOrderProduct[];
}
