import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loader, PageWrap, Text } from '@shared/ui';
import { orderService } from '@entities/order/service';
import { OrderItem } from '@entities/order/components/order-item';

const MyOrders: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    orderService.getOrders().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" margin="0 0 20px" textAlign="center">
        История заказов
      </Text>
      {orderService.orders$.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </PageWrap>
  );
});

export default MyOrders;
