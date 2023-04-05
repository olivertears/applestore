import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ProductTypeEnum } from '../../../../../interfaces';
import { Divider, Form } from '../../../../ui';

import * as S from './product-form.styles';
import { NEW_COLOR, ProductFormTabEnum } from './product-form.constants';
import { ProductFormData, ProductFormProps, ProductFormTab } from './product-form.types';
import { InformationTab } from './components/information-tab';
import { ConfigurationTab } from './components/configuration-tab';
import { ColorTab } from './components/color-tab';

export const ProductForm: FC<ProductFormProps> = ({ product }) => {
  const methods = useForm<ProductFormData>({
    defaultValues: {
      name: '',
      type: ProductTypeEnum.Mac,
      params: [],
      configurations: [],
      colors: [NEW_COLOR]
    }
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
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
    }
  ];

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} minWidth="545px">
        <S.ProductFormTabs>
          {PRODUCT_FORM_TABS.map(({ tab }) => (
            <S.Tab key={tab} selected={currentTab === tab}>
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
