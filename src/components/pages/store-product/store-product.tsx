import { FC } from 'react';
import { PageWrap } from '@shared/ui';
import { StoreProductForm } from './store-product-form';
import { IProduct } from '../../../interfaces';

export const StoreProduct: FC = () => {
  return (
    <PageWrap>
      <StoreProductForm product={{} as IProduct} />
    </PageWrap>
  );
};
