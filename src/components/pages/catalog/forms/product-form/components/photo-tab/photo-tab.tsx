import { FC } from 'react';
import { PhotoTabProps } from './photo-tab.types';
import { Text } from '../../../../../../ui';
import { ProductPhotoSlider } from './product-photo-slider';

export const PhotoTab: FC<PhotoTabProps> = ({ product }) => {
  if (!product) {
    return (
      <Text type="param" textAlign="center">
        Прежде чем установить фотографии, нужно заполнить основную информацию о продукте
      </Text>
    );
  }

  return (
    <>
      {product.colors.map((color) => (
        <ProductPhotoSlider
          key={color.name}
          color={color}
          type={product?.type}
          name={product?.name}
        />
      ))}
    </>
  );
};
