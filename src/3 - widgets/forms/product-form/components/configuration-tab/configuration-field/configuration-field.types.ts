import { UseFieldArrayRemove } from 'react-hook-form';
import { ProductConfigurationEnum } from '@entities/product/types';

export interface ConfigurationFieldProps {
  index: number;
  remove: UseFieldArrayRemove;
  availableConfigurations: ProductConfigurationEnum[];
}
