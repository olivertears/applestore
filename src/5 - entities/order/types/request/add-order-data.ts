import { IOrderProduct, OrderPaymentOptionEnum } from '@entities/order/types';

export interface AddOrderData {
  address: string;
  paymentOption: OrderPaymentOptionEnum;
  finalPrice: number;
  products: IOrderProduct[];
}
