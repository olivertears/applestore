import { FC, useEffect, useState } from 'react';
import { Loader, PageWrap, Text } from '@shared/ui';
import { ProductSlider } from './components/product-slider';
import { useLocation, useNavigate } from 'react-router-dom';
import { productService } from '@entities/product/service';
import { ProductTypeEnum } from '@entities/product/types';
import { RouteNames } from '@app/router';

const StoreUnit: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const type = pathname.split('/').pop() || '';

  useEffect(() => {
    productService.setProducts([]);
    if (Object.keys(ProductTypeEnum).includes(type)) {
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
