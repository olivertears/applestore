import { FC } from 'react';
import { PageWrap } from '@shared/ui';
import { StoreProductForm } from '@widgets/forms/store-product-form';
import { IProduct } from '@entities/product/types';

const StoreProduct: FC = () => {
  return (
    <PageWrap>
      <StoreProductForm product={{} as IProduct} />
    </PageWrap>
  );
};

export default StoreProduct;
