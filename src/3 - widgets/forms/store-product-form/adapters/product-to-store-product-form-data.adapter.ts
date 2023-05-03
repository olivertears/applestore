import { IProduct } from '@entities/product/types';
import { StoreProductFormData } from '@widgets/forms/store-product-form/store-product-form.types';

export const productToStoreProductFormDataAdapter = (product: IProduct): StoreProductFormData => {
  const { name, price, preview, id, colors, configurations } = product;

  const productFormConfigurations = configurations?.reduce((res, { value, name }) => {
    const i = Object.entries(res).findIndex(([key]) => key === name);
    return i === -1 ? { ...res, [name]: value } : res;
  }, {});

  return {
    name,
    preview: id + '/' + preview,
    color: colors[0].name,
    configurations: productFormConfigurations,
    price
  };
};
