import { UseFieldArrayRemove } from 'react-hook-form';

export interface ConfigurationValueFieldProps {
  configurationIndex: number;
  index: number;
  remove: UseFieldArrayRemove;
  removeConfiguration: UseFieldArrayRemove;
}
