import { ReactNode } from 'react';
import {
  Color,
  IProduct,
  ProductConfigurationEnum,
  ProductParamEnum,
  ProductTypeEnum
} from '../../../../../interfaces';

export interface ProductFormProps {
  product?: IProduct;
}

export interface ProductFormTab {
  tab: string;
  content: ReactNode;
}

export interface ProductFormData {
  id?: string;
  name: string;
  type: ProductTypeEnum;
  price?: number;
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
