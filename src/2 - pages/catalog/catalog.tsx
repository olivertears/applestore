import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { IProduct, ProductTypeEnum } from '@entities/product/types';
import { useModal } from '@shared/hooks';
import { Modal, PageWrap } from '@shared/ui';
import { ProductForm } from '@widgets/forms/product-form';
import { ProductSlider } from './components/product-slider';
import { productService } from '@entities/product/service';
import { PRODUCTS_BY_TYPE_INITIAL_VALUE } from './catalog.constants';

const Catalog: FC = observer(() => {
  const { isModalOpen, showModal, hideModal, selectedItemId } = useModal();
  const [type, setType] = useState<ProductTypeEnum>(ProductTypeEnum.Mac);

  useEffect(() => {
    productService.getProducts();
  }, []);

  const PRODUCTS_BY_TYPE: { [key in ProductTypeEnum]: IProduct[] } =
    productService.products$.reduce(
      (res, product) => ({ ...res, [product.type]: [...res[product.type], product] }),
      PRODUCTS_BY_TYPE_INITIAL_VALUE
    );

  return (
    <PageWrap padding="30px 0 0">
      {Object.entries(PRODUCTS_BY_TYPE).map(([type, products]) => (
        <ProductSlider
          key={type}
          type={type as ProductTypeEnum}
          products={products}
          showModal={showModal}
          setType={setType}
        />
      ))}
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductForm
          hideModal={hideModal}
          product={productService.products$.find((product) => product.id === selectedItemId)}
          type={type}
        />
      </Modal>
    </PageWrap>
  );
});

export default Catalog;
