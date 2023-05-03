import { AddOrderData, IOrder, OrderStatusEnum } from '../types';

export interface IOrderService {
  orders$: IOrder[];
  addOrder: (orderData: AddOrderData) => void;
  getOrders: () => void;
  getOrdersByStatus: (status: OrderStatusEnum) => void;
  updateOrderStatus: (orderId: string, status: OrderStatusEnum) => void;
}
