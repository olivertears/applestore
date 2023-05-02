import { action, makeObservable, observable } from 'mobx';
import { productApi } from '@entities/product/api';
import { IProduct, ProductTypeEnum } from '@entities/product/types';
import { IProductService } from './product.types';

class ProductService implements IProductService {
  products$: IProduct[] = [];

  constructor() {
    makeObservable(this, {
      products$: observable,
      setProducts: action
    });
  }

  setProducts(products: IProduct[]) {
    this.products$ = products;
  }

  async addProduct(addProductData: Omit<IProduct, 'id'>) {
    const { data } = await productApi.addProduct(addProductData);
    this.setProducts([...this.products$, data]);
  }

  async deleteProduct(id: string) {
    await productApi.deleteProduct(id);
    this.setProducts(this.products$.filter((item) => item.id !== id));
  }

  async updateProduct(updateProductData: IProduct) {
    const { data } = await productApi.updateProduct(updateProductData);
    this.setProducts(
      this.products$.map((item) => (item.id === updateProductData.id ? data : item))
    );
  }

  async getProducts(type?: ProductTypeEnum) {
    const { data } = await productApi.getProducts(type);
    this.setProducts(data);
  }

  async getProductByName(name: string): Promise<IProduct> {
    const { data } = await productApi.getProductByName(name);
    return data;
  }
}

export const productService = new ProductService();
