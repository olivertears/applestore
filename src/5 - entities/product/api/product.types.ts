import { AxiosResponse } from 'axios';
import { IProduct, ProductTypeEnum } from '../types';

export interface IProductApi {
  endpoint: 'products';
  addProduct: (addProductData: Omit<IProduct, 'id'>) => Promise<AxiosResponse<IProduct>>;
  deleteProduct: (id: string) => Promise<AxiosResponse>;
  updateProduct: (updateProductData: IProduct) => Promise<AxiosResponse<IProduct>>;
  getProducts: (type?: ProductTypeEnum) => Promise<AxiosResponse<IProduct[]>>;
  getProductByName: (name: string) => Promise<AxiosResponse<IProduct>>;
}
