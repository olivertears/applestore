import { ProductTypeEnum } from '@entities/product/types';

export interface IFavorite {
  id: number;
  productId: string;
  productName: string;
  productPreview?: string;
  productType: ProductTypeEnum;
}
