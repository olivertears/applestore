import { IProduct } from '../../../../../interfaces';

export interface ProductSliderProps {
  type: string;
  products: IProduct[];
  showModal: (id?: number) => void;
}
