import { FC } from 'react';
import { Card, CatalogSlider, Text } from '../../../../ui';
import * as S from './product-slider.styles';
import { ProductSliderProps } from './product-slider.types';
import { AddIcon } from '../../../../ui/icons';

export const ProductSlider: FC<ProductSliderProps> = ({ type, products, showModal }) => {
  return (
    <>
      <Text type="title" padding="0 20px" margin="0 0 10px">
        {type}
      </Text>
      <CatalogSlider marginBottom="50px">
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
    </>
  );
};
