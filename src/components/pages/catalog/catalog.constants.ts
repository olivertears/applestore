import { IProduct, ProductTypeEnum } from '../../../interfaces';

export const PRODUCTS_BY_TYPE_INITIAL_VALUE: { [key in ProductTypeEnum]: IProduct[] } = {
  [ProductTypeEnum.Mac]: [],
  [ProductTypeEnum.iPhone]: [],
  [ProductTypeEnum.iPad]: [],
  [ProductTypeEnum.AirPods]: [],
  [ProductTypeEnum.Watch]: []
};
