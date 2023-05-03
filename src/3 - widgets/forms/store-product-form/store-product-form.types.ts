import { IProduct, ProductConfigurationEnum } from '@entities/product/types';

export interface StoreProductFormProps {
  product: IProduct;
}

export interface StoreProductFormData {
  name: string;
  preview: string;
  price?: number;
  color: string;
  configurations?: { [key in ProductConfigurationEnum]?: string };
}
