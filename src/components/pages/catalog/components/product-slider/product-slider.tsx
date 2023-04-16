import { FC } from 'react';
import { Card, CatalogSlider, Column, Text } from '../../../../ui';
import * as S from './product-slider.styles';
import { ProductSliderProps } from './product-slider.types';
import { AddIcon } from '../../../../ui/icons';

export const ProductSlider: FC<ProductSliderProps> = ({ type, products, showModal }) => {
  return (
    <Column>
      <Text type="title" padding="0 20px">
        {type}
      </Text>
      <CatalogSlider>
        {products.map(({ name, id }) => (
          <Card key={name} onClick={() => showModal(id)}>
            <S.ProductCard>
              <Text type="header" textAlign="center">
                {name}
              </Text>
            </S.ProductCard>
          </Card>
        ))}
        <Card onClick={() => showModal()}>
          <S.ProductCard>
            <AddIcon width="50px" margin="auto" />
          </S.ProductCard>
        </Card>
      </CatalogSlider>
    </Column>
  );
};
