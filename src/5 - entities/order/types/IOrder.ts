import { ICartProduct } from '@entities/cart/types';

export interface IOrder {
  id: string;
  address: string;
  paymentOption: OrderPaymentOptionEnum;
  date: string;
  dateDone?: string;
  status: OrderStatusEnum;
  finalPrice: number;
  products: IOrderProduct[];
}
export interface IOrderProduct {
  product: ICartProduct;
  amount: number;
}

export enum OrderPaymentOptionEnum {
  CARD = 'CARD',
  CASH = 'CASH'
}

export enum OrderStatusEnum {
  CANCELLED = 'CANCELLED',
  PROCESSING = 'PROCESSING',
  DELIVERY = 'DELIVERY',
  COMPLETED = 'COMPLETED'
}
