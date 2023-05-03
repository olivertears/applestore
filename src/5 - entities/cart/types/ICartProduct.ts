import { ProductConfigurationEnum } from '@entities/product/types';

export interface ICartProduct {
  id: string;
  name: string;
  preview: string;
  price?: number;
  color: string;
  configurations?: ICartConfiguration[];
}

export interface ICartConfiguration {
  name: ProductConfigurationEnum;
  value: string;
}
