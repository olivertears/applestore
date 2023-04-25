import { IProduct, ProductTypeEnum } from '@entities/product/types';

export const PRODUCTS_BY_TYPE_INITIAL_VALUE: { [key in ProductTypeEnum]: IProduct[] } = {
  [ProductTypeEnum.Mac]: [],
  [ProductTypeEnum.iPhone]: [],
  [ProductTypeEnum.iPad]: [],
  [ProductTypeEnum.AirPods]: [],
  [ProductTypeEnum.Watch]: []
};
