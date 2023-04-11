import { IProduct, ProductConfigurationEnum, ProductTypeEnum } from '../../interfaces';

export const MOCKED_PRODUCT: IProduct = {
  id: '1',
  name: 'iPhone 12',
  type: ProductTypeEnum.iPhone,
  price: 599,
  display: 'display',
  powerAndBattery: 'bad battery',
  configurations: [
    { name: ProductConfigurationEnum.MEMORY, value: '64GB', extraPrice: 0 },
    { name: ProductConfigurationEnum.MEMORY, value: '128GB', extraPrice: 100 },
    { name: ProductConfigurationEnum.MEMORY, value: '256GB', extraPrice: 200 }
  ],
  colors: [
    { name: 'red', value: '#ff0000' },
    { name: 'blue', value: '#0000ff' }
  ]
};
