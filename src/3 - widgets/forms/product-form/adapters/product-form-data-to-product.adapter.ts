import { IProductConfiguration, IProduct, ProductParamEnum } from '@entities/product/types';
import { ProductFormData } from '../product-form.types';

export const productFormDataToProductAdapter = (
  productFormData: ProductFormData
): Omit<IProduct, 'id'> => {
  const { params, configurations, colors, ...rest } = productFormData;

  const productParams: { [key in ProductParamEnum]?: string } =
    params?.reduce((res, { name, value }) => ({ ...res, [name]: value }), {}) || {};

  const productConfiguration: IProductConfiguration[] =
    configurations?.map(({ name, values }) => values.map((value) => ({ name, ...value }))).flat() ||
    [];

  return { ...rest, ...productParams, configurations: productConfiguration, colors };
};
