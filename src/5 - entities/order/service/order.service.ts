import { action, makeObservable, observable } from 'mobx';
import { orderApi } from '@entities/order/api';
import { AddOrderData, IOrder, OrderStatusEnum } from '../types';
import { IOrderService } from './order.types';
import { cartService } from '@entities/cart/service';

class OrderService implements IOrderService {
  orders$: IOrder[] = [];

  constructor() {
    makeObservable(this, {
      orders$: observable,
      setOrders: action
    });
  }

  setOrders(orders: IOrder[]) {
    this.orders$ = orders;
  }

  async addOrder(orderData: AddOrderData) {
    const { data } = await orderApi.addOrder(orderData);
    this.setOrders([data, ...this.orders$]);
    cartService.setCart([]);
  }

  async getOrders() {
    const { data } = await orderApi.getOrders();
    this.setOrders(data);
  }

  async getOrdersByStatus(status: OrderStatusEnum) {
    const { data } = await orderApi.getOrdersByStatus(status);
    this.setOrders(data);
  }

  async updateOrderStatus(orderId: string, status: OrderStatusEnum) {
    const { data } = await orderApi.updateOrderStatus(orderId, status);
    this.setOrders(data);
  }
}

export const orderService = new OrderService();
