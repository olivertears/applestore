import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { calcMonthPayment, toUrlCase } from '../../../../../6 - shared/utils';
import { Card, CatalogSlider, Color, Skeleton, Text } from '@shared/ui';
import * as S from './product-slider.styles';
import { productService } from '../../../../../services/product';

export const ProductSlider: FC = observer(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(pathname);

  useEffect(() => {
    productService.getProducts();
  }, []);

  return (
    <>
      <Text type="header" padding="15px">
        All models. <Color>Take your pick.</Color>
      </Text>
      <CatalogSlider>
        {productService.products$.map(({ name, colors, price }) => (
          <Card key={name} onClick={() => navigate(pathname + '/' + toUrlCase(name))}>
            <S.ProductCard>
              <S.HeaderWrap>
                <Text type="header">{name}</Text>
              </S.HeaderWrap>
              <Skeleton>
                <S.Image img={colors[0].photos[0]} />
              </Skeleton>
              <S.ColorWrap>
                {colors.map(({ name, value }) => (
                  <S.Color key={name} color={value} />
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
});
