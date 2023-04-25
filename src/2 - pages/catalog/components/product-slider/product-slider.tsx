import { FC } from 'react';
import { productService } from '@entities/product/service';
import { AddIcon, CloseIcon } from '@shared/icons';
import { Card, CatalogSlider, Text } from '@shared/ui';
import * as S from './product-slider.styles';
import { ProductSliderProps } from './product-slider.types';

export const ProductSlider: FC<ProductSliderProps> = ({ type, products, showModal, setType }) => {
  return (
    <>
      <Text type="title" padding="0 20px" margin="0 0 10px">
        {type}
      </Text>
      <CatalogSlider marginBottom="50px">
        {products.map(({ name, id }) => (
          <Card key={name} onClick={() => showModal(id)} padding="0">
            <S.ProductCard>
              <Text type="header" textAlign="center">
                {name}
              </Text>
              <CloseIcon
                onClick={(event) => {
                  event.stopPropagation();
                  productService.deleteProduct(id);
                }}
              />
            </S.ProductCard>
          </Card>
        ))}
        <Card
          padding="0"
          onClick={() => {
            showModal();
            setType(type);
          }}
        >
          <S.ProductCard>
            <AddIcon width="50px" margin="auto" />
          </S.ProductCard>
        </Card>
      </CatalogSlider>
    </>
  );
};
