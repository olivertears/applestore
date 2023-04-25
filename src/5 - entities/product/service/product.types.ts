import { IProduct, ProductTypeEnum } from '../types';

export interface IProductService {
  products$: IProduct[];
  addProduct: (addProductData: Omit<IProduct, 'id'>) => void;
  deleteProduct: (id: string) => void;
  updateProduct: (updateProductData: IProduct) => void;
  getProducts: (type?: ProductTypeEnum) => void;
  getProductsByName: (name: string) => Promise<IProduct[]>;
}
