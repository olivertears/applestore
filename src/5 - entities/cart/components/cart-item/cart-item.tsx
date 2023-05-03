import { FC } from 'react';
import { CartItemProps } from './cart-item.types';
import * as S from './cart-item.styles';
import { Column, Card, Text, Input } from '@shared/ui';
import { CloseIcon } from '@shared/icons';
import { cartService } from '@entities/cart/service';
import { CONFIGURATION_NAMES } from '@entities/product/constants';
import { useFormContext } from 'react-hook-form';

export const CartItem: FC<CartItemProps> = ({ cartItem, index, remove }) => {
  const {
    watch,
    register,
    formState: { errors }
  } = useFormContext<{ finalPrice: 0; products: { amount: number }[] }>();

  return (
    <Card padding="0" color="#fff">
      <S.CartItem>
        <S.Image preview={cartItem.preview} />
        <Column>
          <Text type="header" textAlign="center">
            {cartItem.name} ({cartItem.color})
          </Text>
          {cartItem.configurations?.map((configuration) => (
            <Text key={configuration.name} type="param">
              {CONFIGURATION_NAMES[configuration.name]}: {configuration.value}
            </Text>
          ))}
        </Column>
        <Column justifyContent="end">
          <Input
            type="integer"
            label="Количество"
            value={watch(`products.${index}.amount`)}
            error={errors?.products?.[index]?.amount?.message}
            maxLength={3}
            {...register(`products.${index}.amount`, {
              required: 'Это поле обязательно',
              min: {
                value: 1,
                message: 'Это поле обязательно'
              }
            })}
          />

          <Text type="header" textAlign="right">
            ${(watch(`products.${index}.amount`) * (cartItem?.price || 0))?.toFixed(2)}
          </Text>
        </Column>
        <S.IconWrap>
          <CloseIcon
            onClick={() => {
              remove();
              cartService.deleteFromCart(cartItem.id);
            }}
          />
        </S.IconWrap>
      </S.CartItem>
    </Card>
  );
};
