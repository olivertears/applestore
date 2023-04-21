import { RouteNames } from '../../../../templates/router/router.types';
import { StoreUnit } from './unit-slider.types';

export const STORE_UNIT_CARDS: StoreUnit[] = [
  { name: 'Mac', link: RouteNames.STORE_UNIT.replace(':type', 'mac') },
  { name: 'iPad', link: RouteNames.STORE_UNIT.replace(':type', 'ipad') },
  { name: 'iPhone', link: RouteNames.STORE_UNIT.replace(':type', 'iphone') },
  { name: 'Watch', link: RouteNames.STORE_UNIT.replace(':type', 'watch') },
  { name: 'AirPods', link: RouteNames.STORE_UNIT.replace(':type', 'airpods') }
];
