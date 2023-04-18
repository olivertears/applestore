import { FC } from 'react';
import { Column, Form, PhotoSlider, Row, Text } from '../../../ui';
import { StoreProductFormProps } from './store-product-form.types';
import { ColorSelector } from './components/color-selector';
import { ConfigurationSelector } from './components/configuration-selector';
import { ProductInfo } from './components/product-info';
import { AddToCartFooter } from './components/add-to-cart-footer';
import { FormProvider, useForm } from 'react-hook-form';
import { StoreProductFormData } from '../store-product.types';
import { productToStoreProductFormDataAdapter } from './adapters/product-to-store-product-form-data.adapter';
import { productToProductFormDataAdapter } from '../../catalog/forms/adapters';

export const StoreProductForm: FC<StoreProductFormProps> = ({ product }) => {
  const methods = useForm<StoreProductFormData>({
    defaultValues: productToStoreProductFormDataAdapter(product)
  });

  const { handleSubmit, watch } = methods;

  const onSubmit = (data: StoreProductFormData) => {
    console.log(data);
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
    </FormProvider>
  );
};
