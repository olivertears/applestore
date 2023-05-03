import { AxiosResponse } from 'axios';
import { privateApi } from '@shared/constants/api';
import { AddOrderData, IOrder, OrderStatusEnum } from '../types';
import { IOrderApi } from './order.types';

class OrderApi implements IOrderApi {
  endpoint = 'orders' as const;

  addOrder(orderData: AddOrderData): Promise<AxiosResponse<IOrder>> {
    return privateApi.post(this.endpoint, orderData);
  }

  getOrders(): Promise<AxiosResponse<IOrder[]>> {
    return privateApi.get(this.endpoint);
  }

  getOrdersByStatus(status: OrderStatusEnum): Promise<AxiosResponse<IOrder[]>> {
    return privateApi.get(this.endpoint + '/' + status);
  }

  updateOrderStatus(orderId: string, status: OrderStatusEnum): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint + '/' + orderId + '/' + status);
  }
}

export const orderApi = new OrderApi();
