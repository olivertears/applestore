import { FC } from 'react';
import { Card, CatalogSlider, Color, Text } from '@shared/ui';
import * as S from './advantage-slider.styles';
import { STORE_ADVANTAGE_CARDS } from './advantage-slider.constants';

export const AdvantageSlider: FC = () => {
  return (
    <>
      <Text type="header" padding="0 20px" margin="0 0 20px">
        The Apple Store difference. <Color>Even more reasons to shop with us.</Color>
      </Text>
      <CatalogSlider>
        {STORE_ADVANTAGE_CARDS.map(({ text, Icon }) => (
          <Card key={text}>
            <S.Advantage>
              <Icon />
              <Text type="header">{text}</Text>
            </S.Advantage>
          </Card>
        ))}
      </CatalogSlider>
    </>
  );
};
