import { IProduct, ProductTypeEnum } from '../../../../../interfaces';
import { Dispatch, SetStateAction } from 'react';

export interface ProductSliderProps {
  type: ProductTypeEnum;
  products: IProduct[];
  showModal: (id?: string) => void;
  setType: Dispatch<SetStateAction<ProductTypeEnum>>;
}
