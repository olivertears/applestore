import { FC } from 'react';
import * as S from './cart-form-footer.styles';

import { Button, Column, Row, Text } from '@shared/ui';
import { CartFormFooterProps } from '@widgets/forms/cart-product-form/cart-form-footer/cart-form-footer.types';
import { useFormContext } from 'react-hook-form';

export const CartFormFooter: FC<CartFormFooterProps> = ({ products, showModal }) => {
  const { setValue } = useFormContext<{ finalPrice: number; products: { amount: number }[] }>();

  const calcFinalPrice = (): number =>
    products?.reduce((res, { product, amount }) => (product?.price || 0) * amount + res, 0) || 0;

  setValue('finalPrice', calcFinalPrice());

  return (
    <S.Wrap>
      <S.Content>
        <Column width="100%" gap="0">
          <Text type="header" textAlign="right">
            Итого:
          </Text>
          <Text type="header" textAlign="right">
            ${calcFinalPrice().toFixed(2)}
          </Text>
        </Column>
        <Row alignItems="center">
          <Button type="button" onClick={showModal}>
            ОФОРМИТЬ ЗАКАЗ
          </Button>
        </Row>
      </S.Content>
    </S.Wrap>
  );
};
