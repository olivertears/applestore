import { ProductConfigurationEnum } from '../types';

export const CONFIGURATION_NAMES: { [key in ProductConfigurationEnum]: string } = {
  [ProductConfigurationEnum.STORAGE]: 'Хранилище',
  [ProductConfigurationEnum.PROCESSOR]: 'Процессор',
  [ProductConfigurationEnum.MEMORY]: 'Память'
};
