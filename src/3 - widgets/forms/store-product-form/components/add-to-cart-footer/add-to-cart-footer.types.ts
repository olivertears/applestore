import { IProductConfiguration } from '@entities/product/types';

export interface AddToCartFooterProps {
  configurations?: IProductConfiguration[];
  price?: number;
  productId: string;
}
