import { FC } from 'react';
import { OrderItemProps } from './order-item.types';
import * as S from './order-item.styles';
import { Card, Column, Text, Color } from '@shared/ui';
import { OrderStatusEnum } from '@entities/order/types';
import { CONFIGURATION_NAMES } from '@entities/product/constants';

export const OrderItem: FC<OrderItemProps> = ({ order }) => {
  console.log(order);

  return (
    <Card padding="0" color="#fff">
      <S.OrderItem>
        <S.OrderId>{order.id}</S.OrderId>
        <Text type="header" textAlign="center">
          Детали заказа
        </Text>
        <Column gap="5px">
          <Text type="param">Статус: {order.status}</Text>
          <Text type="param">Дата заказа: {order.date}</Text>
          {order.status === OrderStatusEnum.COMPLETED && (
            <Text type="param">Дата заказа: {order.dateDone}</Text>
          )}
          <Text type="param">Адрес доставки: {order.address}</Text>
          <Text type="param">Способ оплаты: {order.paymentOption}</Text>
        </Column>
        <Text type="header" textAlign="center">
          Список покупок
        </Text>
        {order.products.map(({ product, amount }) => (
          <Card key={product.id} padding="0">
            <S.OrderProduct>
              <S.Image preview={product.preview} />
              <Column>
                <Text type="header" textAlign="center">
                  {product.name} ({product.color})
                </Text>
                <Text type="param" textAlign="center">
                  Конфигурация
                </Text>
                <Column gap="0">
                  {product.configurations?.map((configuration) => (
                    <Text key={configuration.name} type="param">
                      {CONFIGURATION_NAMES[configuration.name]}: {configuration.value}
                    </Text>
                  ))}
                  <Text type="param">Количество: {amount}</Text>
                  <Text type="param">Цена: ${product.price?.toFixed(2)}</Text>
                </Column>
              </Column>
            </S.OrderProduct>
          </Card>
        ))}
        <Column justifyContent="end">
          <Text type="header" textAlign="right">
            ${order.finalPrice?.toFixed(2)}
          </Text>
        </Column>
      </S.OrderItem>
    </Card>
  );
};
