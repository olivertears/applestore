import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loader, PageWrap, Select, Text } from '@shared/ui';
import { orderService } from '@entities/order/service';
import { OrderItem } from '@entities/order/components/order-item';
import { OrderStatusEnum } from '@entities/order/types';
import { ORDER_STATUS_NAMES } from '@entities/order/constants';

const Orders: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(OrderStatusEnum.PROCESSING);

  useEffect(() => {
    orderService.getOrdersByStatus(status).finally(() => setIsLoading(false));
  }, [status]);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" margin="0 0 20px" textAlign="center">
        Заказы
      </Text>
      <Select
        label="Статус заказа"
        required
        value={status}
        onSelect={(value) => setStatus(value as OrderStatusEnum)}
      >
        {Object.keys(OrderStatusEnum).map((status) => (
          <option key={status} value={status}>
            {ORDER_STATUS_NAMES[status as OrderStatusEnum]}
          </option>
        ))}
      </Select>
      {orderService.orders$.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </PageWrap>
  );
});

export default Orders;
