export interface IOrder {
  id: string;
  userId: string;
  addressId: string;
  paymentOption: OrderPaymentOption;
  date: string;
  status: OrderStatus;
  finalPrice: number;
}

export type OrderPaymentOption = 'CASH' | 'CARD';

export type OrderStatus = 'PROCESSING' | 'DELIVERY' | 'COMPLETED';

export interface IOrderItem {
  id: string;
  orderId: string;
  productId: string;
  amount: number;
}
