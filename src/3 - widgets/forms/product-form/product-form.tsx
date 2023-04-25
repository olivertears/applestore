import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Divider, Form, Loader } from '@shared/ui';

import * as S from './product-form.styles';
import { productFormDataToProductAdapter, productToProductFormDataAdapter } from './adapters';
import { NEW_FORM_DATA, ProductFormTabEnum } from './product-form.constants';
import { ProductFormData, ProductFormProps, ProductFormTab } from './product-form.types';
import { InformationTab } from './components/information-tab';
import { ConfigurationTab } from './components/configuration-tab';
import { ColorTab } from './components/color-tab';
import { PhotoTab } from './components/photo-tab';
import { productService } from '@entities/product/service';

export const ProductForm: FC<ProductFormProps> = ({ product, hideModal, type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<ProductFormData>({
    defaultValues: product ? productToProductFormDataAdapter(product) : { ...NEW_FORM_DATA, type }
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: ProductFormData) => {
    setIsLoading(true);
    product
      ? productService
          .updateProduct({ ...productFormDataToProductAdapter(data), id: product.id })
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : productService
          .addProduct(productFormDataToProductAdapter(data))
          .then(hideModal)
          .finally(() => setIsLoading(false));
  };

  const [currentTab, setCurrentTab] = useState(ProductFormTabEnum.INFORMATION);

  const moveToInformation = () => setCurrentTab(ProductFormTabEnum.INFORMATION);
  const moveToConfiguration = () => setCurrentTab(ProductFormTabEnum.CONFIGURATION);
  const moveToColors = () => setCurrentTab(ProductFormTabEnum.COLORS);

  const PRODUCT_FORM_TABS: ProductFormTab[] = [
    {
      tab: ProductFormTabEnum.INFORMATION,
      content: <InformationTab onNextButtonClick={handleSubmit(moveToConfiguration)} />
    },
    {
      tab: ProductFormTabEnum.CONFIGURATION,
      content: (
        <ConfigurationTab
          onPrevButtonClick={moveToInformation}
          onNextButtonClick={handleSubmit(moveToColors)}
        />
      )
    },
    {
      tab: ProductFormTabEnum.COLORS,
      content: <ColorTab onPrevButtonClick={moveToConfiguration} />
    },
    {
      tab: ProductFormTabEnum.PHOTOS,
      content: <PhotoTab product={product} />
    }
  ];

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} maxWidth="545px" minWidth="545px">
        {isLoading && <Loader />}
        <S.ProductFormTabs>
          {PRODUCT_FORM_TABS.map(({ tab }) => (
            <S.Tab
              key={tab}
              selected={currentTab === tab}
              onClick={
                [ProductFormTabEnum.PHOTOS, ProductFormTabEnum.INFORMATION].includes(tab)
                  ? () => setCurrentTab(tab)
                  : undefined
              }
            >
              {tab}
            </S.Tab>
          ))}
        </S.ProductFormTabs>
        <Divider margin="0 20px" />
        {PRODUCT_FORM_TABS.find(({ tab }) => tab === currentTab)?.content}
      </Form>
    </FormProvider>
  );
};
