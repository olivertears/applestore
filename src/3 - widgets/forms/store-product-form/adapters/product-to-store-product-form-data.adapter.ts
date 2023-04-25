import { IProduct } from '@entities/product/types';
import { StoreProductFormData } from '../store-product-form.types';

export const productToStoreProductFormDataAdapter = (product: IProduct): StoreProductFormData => {
  const { colors, configurations } = product;

  const productFormConfigurations = configurations?.reduce((res, { value, name }) => {
    const i = Object.entries(res).findIndex(([key]) => key === name);
    return i === -1 ? { ...res, [name]: value } : res;
  }, {});

  return { color: colors[0].name, ...productFormConfigurations };
};
