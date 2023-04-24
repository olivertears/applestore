import { FC } from 'react';
import { PageWrap, Text } from '@shared/ui';
import { ProductSlider } from './components/product-slider';
import { ProductTypeEnum } from '../../../interfaces';
import { useLocation } from 'react-router-dom';

export const StoreUnit: FC = () => {
  const { pathname } = useLocation();

  return (
    <PageWrap>
      <Text type="title" padding="0 20px" margin="0 0 20px">
        Shop{' '}
        {Object.keys(ProductTypeEnum).find(
          (key) => key.toLowerCase() === pathname.substring(pathname.lastIndexOf('/') + 1)
        )}
      </Text>
      <ProductSlider />
    </PageWrap>
  );
};
