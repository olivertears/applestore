import { UseFieldArrayRemove } from 'react-hook-form';
import { ProductConfigurationEnum } from '../../../../../../../../interfaces';

export interface ConfigurationFieldProps {
  index: number;
  remove: UseFieldArrayRemove;
  availableConfigurations: ProductConfigurationEnum[];
}
