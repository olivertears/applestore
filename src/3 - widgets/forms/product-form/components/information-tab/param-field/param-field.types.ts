import { UseFieldArrayRemove } from 'react-hook-form';
import { ProductParamEnum } from '@entities/product/types';

export interface ParamFieldProps {
  index: number;
  remove: UseFieldArrayRemove;
  availableParams: ProductParamEnum[];
}
