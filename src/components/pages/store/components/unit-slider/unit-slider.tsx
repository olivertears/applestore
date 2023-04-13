import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CatalogSlider, Color, Text } from '../../../../ui';
import * as S from './unit-slider.styles';
import { STORE_UNIT_CARDS } from './unit-slider.constants';

export const UnitSlider: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Text type="title" padding="0 20px" margin="0 0 20px">
        Store. <Color>The best way to buy the products you love.</Color>
      </Text>
      <CatalogSlider marginBottom="50px">
        {STORE_UNIT_CARDS.map(({ name, link, img }) => (
          <Card key={name} onClick={() => navigate(link)}>
            <S.UnitCard img={img}>
              <Text type="header" textAlign="center">
                {name}
              </Text>
            </S.UnitCard>
          </Card>
        ))}
      </CatalogSlider>
    </>
  );
};
