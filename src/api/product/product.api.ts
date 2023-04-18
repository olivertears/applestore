import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IProduct, ProductTypeEnum } from '../../interfaces';
import { IProductApi } from './product.types';

const api = createApi();
const apiWithToken = () => createApi(true);

class ProductApi implements IProductApi {
  endpoint = 'products' as const;

  @Catch
  addProduct(addProductData: Omit<IProduct, 'id'>): Promise<AxiosResponse<IProduct>> {
    return apiWithToken().post(this.endpoint, addProductData);
  }

  @Catch
  deleteProduct(id: number): Promise<AxiosResponse> {
    return apiWithToken().delete(this.endpoint + '/' + id);
  }

  @Catch
  updateProduct(updateProductData: IProduct): Promise<AxiosResponse<IProduct>> {
    return apiWithToken().put(this.endpoint, updateProductData);
  }

  @Catch
  getProducts(type?: ProductTypeEnum): Promise<AxiosResponse<IProduct[]>> {
    return api.get(type ? this.endpoint + '/' + type : this.endpoint);
  }

  @Catch
  getProductsByName(name: string): Promise<AxiosResponse<IProduct[]>> {
    return api.get(this.endpoint + '/getByName/' + name);
  }
}

export const productApi = new ProductApi();
