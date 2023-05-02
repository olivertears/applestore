import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Column, Form, Modal, PhotoSlider, Row, Text } from '@shared/ui';
import { StoreProductFormProps } from './store-product-form.types';
import { ColorSelector } from './components/color-selector';
import { ConfigurationSelector } from './components/configuration-selector';
import { ProductInfo } from './components/product-info';
import { AddToCartFooter } from './components/add-to-cart-footer';
import { productToStoreProductFormDataAdapter } from './adapters/product-to-store-product-form-data.adapter';
import { productToProductFormDataAdapter } from '../product-form/adapters';
import { useModal } from '@shared/hooks';
import { userService } from '@entities/user/service';
import { cartService } from '@entities/cart/service';
import { ICartProduct } from '@entities/cart/types';
import { ProductConfigurationEnum } from '@entities/product/types';

export const StoreProductForm: FC<StoreProductFormProps> = ({ product }) => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const methods = useForm<Omit<ICartProduct, 'id'>>({
    defaultValues: productToStoreProductFormDataAdapter(product)
  });

  const { handleSubmit, watch } = methods;

  const onSubmit = (data: Omit<ICartProduct, 'id'>) => {
    !userService.user$
      ? showModal()
      : cartService.addToCart({
          ...data,
          configurations: Object.entries(data?.configurations).map(([name, value]) => ({
            name: name as ProductConfigurationEnum,
            value
          }))
        });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} minWidth="100%" alignItems="start">
        <Column gap="0" padding="0 50px">
          <Text type="title" margin="20px 0 0">
            {product?.name}
          </Text>
          <Text type="info" margin="0 0 70px">
            Price starts from ${product?.price}
          </Text>
          <Row width="100%" gap="50px">
            <PhotoSlider
              video={product.video}
              images={product.colors.find(({ name }) => name === watch('color'))?.photos || []}
            />
            <Column>
              <ProductInfo
                params={productToProductFormDataAdapter(product).params}
                name={product.name}
              />
              <Column gap="50px">
                <ColorSelector colors={product?.colors || []} />
                {productToProductFormDataAdapter(product).configurations?.map((configuration) => (
                  <ConfigurationSelector key={configuration.name} configuration={configuration} />
                ))}
              </Column>
            </Column>
          </Row>
        </Column>
        <AddToCartFooter configurations={product.configurations} price={product.price} />
      </Form>

      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <Column>
          <Text type="header" textAlign="center">
            Ошибка
          </Text>
          <Text type="param" textAlign="center">
            Войдите в аккаунт, чтобы добавлять товары в корзину
          </Text>
        </Column>
      </Modal>
    </FormProvider>
  );
};
