import { IProduct, ProductConfigurationEnum } from '@entities/product/types';

export interface StoreProductFormProps {
  product: IProduct;
}

export type StoreProductFormData = { [key in ProductConfigurationEnum]?: string } & {
  color: string;
};
