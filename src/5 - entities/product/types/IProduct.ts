import { ProductConfigurationEnum, ProductParamEnum, ProductTypeEnum } from './enums';

export type IProduct = { [key in ProductParamEnum]?: string } & {
  id: string;
  name: string;
  type: ProductTypeEnum;
  price?: number;
  video?: string;
  averageRate?: number;
  configurations?: Configuration[];
  colors: Color[];
};

export interface Configuration {
  name: ProductConfigurationEnum;
  value: string;
  extraPrice: number;
}

export interface Color {
  name: string;
  value: string;
  photos: string[];
}
