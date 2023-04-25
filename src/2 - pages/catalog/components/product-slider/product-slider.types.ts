import { Dispatch, SetStateAction } from 'react';
import { IProduct, ProductTypeEnum } from '@entities/product/types';

export interface ProductSliderProps {
  type: ProductTypeEnum;
  products: IProduct[];
  showModal: (id?: string) => void;
  setType: Dispatch<SetStateAction<ProductTypeEnum>>;
}
