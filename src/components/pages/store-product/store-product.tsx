import { FC } from 'react';
import { PageWrap } from '../../ui';
import { StoreProductForm } from './store-product-form';
import { MOCKED_PRODUCT } from '../../../services/product/product.mocked';

export const StoreProduct: FC = () => {
  return (
    <PageWrap>
      <StoreProductForm product={MOCKED_PRODUCT} />
    </PageWrap>
  );
};
