import { FC } from 'react';
import { PARAM_NAMES } from '@entities/product/constants';
import { Color, Column, Divider, Text } from '@shared/ui';
import { ProductInfoProps } from './product-info.types';

export const ProductInfo: FC<ProductInfoProps> = ({ params, name }) => {
  return (
    <>
      <Text type="subtitle">
        Customize your <Color>{name}</Color>
      </Text>
      <Column gap="5px">
        {params?.map(({ name, value }) => (
          <Text type="param" key={name}>
            {PARAM_NAMES[name]}: <Color>{value}</Color>
          </Text>
        ))}
      </Column>
      <Divider margin="20px 0 0" />
    </>
  );
};
