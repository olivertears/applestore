import { UseFieldArrayRemove } from 'react-hook-form';
import { ProductParamEnum } from '../../../../../../../../interfaces';

export interface ParamFieldProps {
  index: number;
  remove: UseFieldArrayRemove;
  availableParams: ProductParamEnum[];
}
