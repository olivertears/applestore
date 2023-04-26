import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { productService } from '@entities/product/service';
import { calcMonthPayment, toUrlCase } from '@shared/utils';
import { Card, CatalogSlider, Color, Text } from '@shared/ui';
import * as S from './product-slider.styles';

export const ProductSlider: FC = observer(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <Text type="header" padding="15px">
        All models. <Color>Take your pick.</Color>
      </Text>
      <CatalogSlider>
        {productService.products$.map(({ name, id, preview, colors, price }) => (
          <Card key={name} onClick={() => navigate(pathname + '/' + toUrlCase(name))} padding="0">
            <S.ProductCard>
              <S.HeaderWrap>
                <Text type="header" padding="0 30px">
                  {name}
                </Text>
              </S.HeaderWrap>
              <S.Image preview={id + '/' + preview} />
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
