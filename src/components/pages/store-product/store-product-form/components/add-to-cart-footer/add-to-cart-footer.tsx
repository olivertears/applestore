import { FC, useState } from 'react';
import * as S from './add-to-cart-footer.styles';
import { Button, Column, Row, Text } from '../../../../../ui';
import { HeartIcon } from '../../../../../ui/icons';
import { AddToCartFooterProps } from './add-to-cart-footer.types';
import { useFormContext } from 'react-hook-form';
import { StoreProductFormData } from '../../../store-product.types';

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
            ${(Math.ceil(calcFinalPrice() / 12) - 0.01).toFixed(2)}/mo. for 12 mo.
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
