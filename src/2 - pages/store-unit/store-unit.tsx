import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { RouteNames } from '@app/router';
import { productService } from '@entities/product/service';
import { ProductTypeEnum } from '@entities/product/types';
import { Loader, PageWrap, Text } from '@shared/ui';
import { ProductSlider } from './components/product-slider';

const StoreUnit: FC = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productService.setProducts([]);
    if (Object.keys(ProductTypeEnum).includes(type || '')) {
      productService.getProducts(type as ProductTypeEnum).finally(() => setIsLoading(false));
    } else {
      navigate(RouteNames.NOT_FOUND);
      setIsLoading(false);
    }
  }, []);

  return (
    <PageWrap>
      <Text type="title" padding="0 20px" margin="0 0 20px">
        Shop {type}
      </Text>
      {isLoading && <Loader />}
      <ProductSlider />
    </PageWrap>
  );
};

export default StoreUnit;
