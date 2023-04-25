import { FC, useState } from 'react';
import * as S from './add-to-cart-footer.styles';
import { useFormContext } from 'react-hook-form';

import { calcMonthPayment } from '@shared/utils';
import { HeartIcon } from '@shared/icons';
import { Button, Column, Row, Text } from '@shared/ui';
import { StoreProductFormData } from '../../store-product-form.types';
import { AddToCartFooterProps } from './add-to-cart-footer.types';

export const AddToCartFooter: FC<AddToCartFooterProps> = ({ configurations, price }) => {
  const [selected, setSelected] = useState(false);
  const { getValues } = useFormContext<StoreProductFormData>();

  const calcFinalPrice = () =>
    configurations?.reduce(
      (res, { name, value, extraPrice }) => (getValues()[name] === value ? res + extraPrice : res),
      price || 0
    ) || 0;

  return (
    <S.Wrap>
      <S.Content>
        <Column width="100%" gap="0">
          <Text type="header" textAlign="right">
            ${calcFinalPrice().toFixed(2)} or
          </Text>
          <Text type="header" textAlign="right">
            ${calcMonthPayment(calcFinalPrice())}/mo. for 12 mo.
          </Text>
        </Column>
        <Row alignItems="center">
          <Button width="auto" type="submit">
            ADD TO BAG
          </Button>
          <HeartIcon onClick={() => setSelected(!selected)} selected={selected} />
        </Row>
      </S.Content>
    </S.Wrap>
  );
};
