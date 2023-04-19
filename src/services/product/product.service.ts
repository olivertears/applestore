import { action, makeObservable, observable } from 'mobx';
import { productApi } from '../../api/product';
import { IProduct, ProductTypeEnum } from '../../interfaces';
import { IProductService } from './product.types';
import { MOCKED_PRODUCT } from './product.mocked';

class ProductService implements IProductService {
  products$: IProduct[] = [MOCKED_PRODUCT];

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

  async deleteProduct(id: number) {
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

  async getProductsByName(name: string): Promise<IProduct[]> {
    const { data } = await productApi.getProductsByName(name);
    return data;
  }
}

export const productService = new ProductService();
