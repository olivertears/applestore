import { ProductConfigurationEnum, ProductParamEnum, ProductTypeEnum } from './enums';

export type IProduct = { [key in ProductParamEnum]?: string } & {
  id: string;
  name: string;
  type: ProductTypeEnum;
  price: number;
  video?: string;
  preview?: string;
  configurations?: IProductConfiguration[];
  colors: Color[];
};

export interface IProductConfiguration {
  name: ProductConfigurationEnum;
  value: string;
  extraPrice: number;
}

export interface Color {
  name: string;
  value: string;
  photos: string[];
}
