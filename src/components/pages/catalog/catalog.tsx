import { FC, useEffect, useMemo } from 'react';
import { PageWrap } from '../../ui';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { ProductForm } from './forms/product-form';
import { ProductSlider } from './components/product-slider';
import { observer } from 'mobx-react-lite';
import { productService } from '../../../services/product';
import { PRODUCTS_BY_TYPE_INITIAL_VALUE } from './catalog.constants';

export const Catalog: FC = observer(() => {
  const { isModalOpen, showModal, hideModal, selectedItemId } = useModal();

  useEffect(() => {
    productService.getProducts();
  }, []);

  const PRODUCTS_BY_TYPE = useMemo(
    () =>
      productService.products$.reduce(
        (res, product) => ({ ...res, [product.type]: [...res[product.type], product] }),
        PRODUCTS_BY_TYPE_INITIAL_VALUE
      ),
    []
  );

  return (
    <PageWrap>
      {Object.entries(PRODUCTS_BY_TYPE).map(([type, products]) => (
        <ProductSlider key={type} type={type} products={products} showModal={showModal} />
      ))}
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductForm
          product={productService.products$.find((product) => product.id === selectedItemId)}
        />
      </Modal>
    </PageWrap>
  );
});
