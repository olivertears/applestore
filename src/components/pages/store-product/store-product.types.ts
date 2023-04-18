import { ProductConfigurationEnum } from '../../../interfaces';

export type StoreProductFormData = { [key in ProductConfigurationEnum]?: string } & {
  color: string;
};
