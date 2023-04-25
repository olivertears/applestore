import { AxiosResponse } from 'axios';
import { privateApi, publicApi } from '@shared/constants/api';
import { IProduct, ProductTypeEnum } from '../types';
import { IProductApi } from './product.types';

class ProductApi implements IProductApi {
  endpoint = 'products' as const;

  addProduct(addProductData: Omit<IProduct, 'id'>): Promise<AxiosResponse<IProduct>> {
    return privateApi.post(this.endpoint, addProductData);
  }

  deleteProduct(id: string): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint + '/' + id);
  }

  updateProduct(updateProductData: IProduct): Promise<AxiosResponse<IProduct>> {
    return privateApi.put(this.endpoint, updateProductData);
  }

  getProducts(type?: ProductTypeEnum): Promise<AxiosResponse<IProduct[]>> {
    return publicApi.get(type ? this.endpoint + '/' + type : this.endpoint);
  }

  getProductsByName(name: string): Promise<AxiosResponse<IProduct[]>> {
    return publicApi.get(this.endpoint + '/getByName/' + name);
  }
}

export const productApi = new ProductApi();
