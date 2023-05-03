import { FC } from 'react';
import { FavoriteItemProps } from './favorite-item.types';
import { toUrlCase } from '@shared/utils';
import * as S from './favorite-item.styles';
import { Card, Text } from '@shared/ui';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '@app/router';
import { HeartIcon } from '@shared/icons';
import { favoriteService } from '@entities/favorite/service';

export const FavoriteItem: FC<FavoriteItemProps> = ({ favorite }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() =>
        navigate(
          RouteNames.STORE_UNIT_PRODUCT.replace(':type', favorite.productType).replace(
            ':name',
            toUrlCase(favorite.productName)
          )
        )
      }
      padding="0"
    >
      <S.FavoriteItem preview={favorite.productId + '/' + favorite.productPreview}>
        <S.HeaderWrap>
          <Text type="header" textAlign="center">
            {favorite.productName}
          </Text>
        </S.HeaderWrap>
        <S.IconWrap onClick={(e) => e.stopPropagation()}>
          <HeartIcon onClick={() => favoriteService.deleteFavorite(favorite.id)} selected={true} />
        </S.IconWrap>
      </S.FavoriteItem>
    </Card>
  );
};
