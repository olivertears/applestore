import { Color, ProductTypeEnum } from '../../../../../interfaces';
import { ProductFormData } from './product-form.types';

export enum ProductFormTabEnum {
  INFORMATION = 'Информация',
  CONFIGURATION = 'Конфигурация',
  COLORS = 'Цвета',
  PHOTOS = 'Фотографии'
}

export const NEW_COLOR: Color = { value: '#fff', name: '', photos: [] };

export const NEW_FORM_DATA: ProductFormData = {
  name: '',
  type: ProductTypeEnum.Mac,
  params: [],
  configurations: [],
  colors: [NEW_COLOR]
};
