import { AxiosResponse } from 'axios';
import { AddOrderData, IOrder, OrderStatusEnum } from '../types';

export interface IOrderApi {
  endpoint: 'orders';
  addOrder: (orderData: AddOrderData) => Promise<AxiosResponse<IOrder>>;
  getOrders: () => Promise<AxiosResponse<IOrder[]>>;
  getOrdersByStatus: (status: OrderStatusEnum) => Promise<AxiosResponse<IOrder[]>>;
  updateOrderStatus: (orderId: string, status: OrderStatusEnum) => Promise<AxiosResponse<IOrder>>;
}
