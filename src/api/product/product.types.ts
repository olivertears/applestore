import { AxiosResponse } from 'axios';
import { IProduct, ProductTypeEnum } from '../../interfaces';

export interface IProductApi {
  endpoint: 'products';
  addProduct: (addProductData: Omit<IProduct, 'id'>) => Promise<AxiosResponse<IProduct>>;
  deleteProduct: (id: string) => Promise<AxiosResponse>;
  updateProduct: (updateProductData: IProduct) => Promise<AxiosResponse<IProduct>>;
  getProducts: (type?: ProductTypeEnum) => Promise<AxiosResponse<IProduct[]>>;
  getProductsByName: (name: string) => Promise<AxiosResponse<IProduct[]>>;
}
