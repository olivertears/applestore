import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { StoreProductForm } from '@widgets/forms/store-product-form';
import { IProduct } from '@entities/product/types';
import { PageWrap } from '@shared/ui';
import { fromUrlCase } from '@shared/utils';
import { productService } from '@entities/product/service';

const StoreProduct: FC = () => {
  const { type, name } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (name) {
      setIsLoading(true);
      productService
        .getProductsByName(fromUrlCase(name))
        .then((res) => console.log(res))
        .finally(() => setIsLoading(false));
    }
  }, []);

  return <PageWrap>{product && <StoreProductForm product={product} />}</PageWrap>;
};

export default StoreProduct;
