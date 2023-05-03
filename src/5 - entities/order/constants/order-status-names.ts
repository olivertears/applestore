import { OrderStatusEnum } from '@entities/order/types';

export const ORDER_STATUS_NAMES: { [key in OrderStatusEnum]: string } = {
  [OrderStatusEnum.CANCELLED]: 'Отмена',
  [OrderStatusEnum.PROCESSING]: 'В обработке',
  [OrderStatusEnum.DELIVERY]: 'Доставка',
  [OrderStatusEnum.COMPLETED]: 'Принято'
};
