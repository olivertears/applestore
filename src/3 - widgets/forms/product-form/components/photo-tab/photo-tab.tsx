import { FC } from 'react';
import { Preview } from '@widgets/components/preview';
import { ProductPhotoSlider } from '@widgets/components/product-photo-slider';
import { Text } from '@shared/ui';
import { PhotoTabProps } from './photo-tab.types';

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
      <Text type="param" textAlign="center">
        Preview
      </Text>
      <Preview productId={product.id} preview={product.preview || ''} />
      {product.colors.map((color) => (
        <ProductPhotoSlider key={color.name} color={color} productId={product?.id} />
      ))}
    </>
  );
};
