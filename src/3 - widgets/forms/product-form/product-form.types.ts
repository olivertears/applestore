import { ReactNode } from 'react';
import {
  Color,
  IProduct,
  ProductConfigurationEnum,
  ProductParamEnum,
  ProductTypeEnum
} from '@entities/product/types';
import { ProductFormTabEnum } from './product-form.constants';

export interface ProductFormProps {
  product?: IProduct;
  hideModal: () => void;
  type?: ProductTypeEnum;
}

export interface ProductFormTab {
  tab: ProductFormTabEnum;
  content: ReactNode;
}

export interface ProductFormData {
  name: string;
  type: ProductTypeEnum;
  price?: number;
  video?: string;
  preview?: string;
  params?: Param[];
  configurations?: Configuration[];
  colors: Color[];
}

export interface Param {
  name: ProductParamEnum;
  value: string;
}

export interface Configuration {
  name: ProductConfigurationEnum;
  values: ConfigurationValue[];
}

export interface ConfigurationValue {
  value: string;
  extraPrice: number;
}
