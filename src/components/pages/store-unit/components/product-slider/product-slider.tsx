import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { calcMonthPayment, toUrlCase } from '../../../../../utils';
import { Card, CatalogSlider, Color, Skeleton, Text } from '../../../../ui';
import * as S from './product-slider.styles';
import { MOCKED_PRODUCT } from '../../../../../services/product/product.mocked';

export const ProductSlider: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Text type="header" padding="15px">
        All models. <Color>Take your pick.</Color>
      </Text>
      <CatalogSlider>
        {[MOCKED_PRODUCT].map(({ name, colors, price }) => (
          <Card key={name} onClick={() => navigate(pathname + '/' + toUrlCase(name))}>
            <S.ProductCard>
              <S.HeaderWrap>
                <Text type="header">{name}</Text>
              </S.HeaderWrap>
              <Skeleton>
                <S.Image img={colors[0].photos[0]} />
              </Skeleton>
              <S.ColorWrap>
                {colors.map(({ value }) => (
                  <S.Color key={value} color={value} />
                ))}
              </S.ColorWrap>
              <S.PriceInfo>From ${price?.toFixed(2)} or</S.PriceInfo>
              <S.PriceInfo>${calcMonthPayment(price || 0)}/mo. fro 12 mo.</S.PriceInfo>
            </S.ProductCard>
          </Card>
        ))}
      </CatalogSlider>
    </>
  );
};
