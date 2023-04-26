import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteNames } from '@app/router';
import { ProductTypeEnum } from '@entities/product/types';
import { Card, CatalogSlider, Color, Text } from '@shared/ui';
import * as S from './unit-slider.styles';

export const UnitSlider: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Text type="title" padding="0 20px" margin="0 0 20px">
        Store. <Color>The best way to buy the products you love.</Color>
      </Text>
      <CatalogSlider marginBottom="50px">
        {Object.keys(ProductTypeEnum).map((unit) => (
          <Card key={unit} onClick={() => navigate(RouteNames.STORE_UNIT.replace(':type', unit))}>
            <S.UnitCard photo={unit.toLowerCase()}>
              <Text type="header" textAlign="center">
                {unit}
              </Text>
            </S.UnitCard>
          </Card>
        ))}
      </CatalogSlider>
    </>
  );
};
