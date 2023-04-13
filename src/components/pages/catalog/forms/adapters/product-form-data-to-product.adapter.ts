import { Configuration, IProduct, ProductParamEnum } from '../../../../../interfaces';
import { ProductFormData } from '../product-form/product-form.types';

export const productFormDataToProductAdapter = (
  productFormData: ProductFormData
): Omit<IProduct, 'id'> => {
  const { params, configurations, colors, ...rest } = productFormData;

  const productParams: { [key in ProductParamEnum]?: string } =
    params?.reduce((res, { name, value }) => ({ ...res, [name]: value }), {}) || {};

  const productConfiguration: Configuration[] =
    configurations?.map(({ name, values }) => values.map((value) => ({ name, ...value }))).flat() ||
    [];

  return { ...rest, ...productParams, configurations: productConfiguration, colors: colors };
};
