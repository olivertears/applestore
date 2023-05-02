import { FC } from 'react';
import * as S from './add-to-cart-footer.styles';
import { useFormContext } from 'react-hook-form';

import { calcMonthPayment } from '@shared/utils';
import { HeartIcon } from '@shared/icons';
import { Button, Column, Modal, Row, Text } from '@shared/ui';
import { AddToCartFooterProps } from './add-to-cart-footer.types';
import { favoriteService } from '@entities/favorite/service';
import { userService } from '@entities/user/service';
import { useModal } from '@shared/hooks';
import { ICartProduct } from '@entities/cart/types';

export const AddToCartFooter: FC<AddToCartFooterProps> = ({ configurations, price, productId }) => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const { getValues, setValue } = useFormContext<Omit<ICartProduct, 'id'>>();

  const calcFinalPrice = (): number =>
    configurations?.reduce(
      (res, { name, value, extraPrice }) =>
        getValues().configurations?.[name] === value ? res + extraPrice : res,
      price || 0
    ) || 0;

  setValue('price', calcFinalPrice());

  const handleFavorite = () => {
    if (!userService.user$) {
      showModal();
    } else {
      !!favoriteService.favorites$.find((fav) => fav.productId === productId)
        ? favoriteService.deleteFavorite(productId)
        : favoriteService.addFavorite(productId);
    }
  };

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
          <HeartIcon
            onClick={handleFavorite}
            selected={!!favoriteService.favorites$.find((fav) => fav.productId === productId)}
          />
        </Row>
      </S.Content>

      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <Column>
          <Text type="header" textAlign="center">
            Ошибка
          </Text>
          <Text type="param" textAlign="center">
            Войдите в аккаунт, чтобы сохранять товары в избранные
          </Text>
        </Column>
      </Modal>
    </S.Wrap>
  );
};
