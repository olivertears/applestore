import { RouteNames } from '../../../../templates/router/router.types';
import mac from '../../../../../assets/mac.png';
import ipad from '../../../../../assets/ipad.png';
import iphone from '../../../../../assets/iphone.png';
import watch from '../../../../../assets/watch.png';
import airpods from '../../../../../assets/airpods.png';
import { StoreUnit } from './unit-slider.types';

export const STORE_UNIT_CARDS: StoreUnit[] = [
  { name: 'Mac', link: RouteNames.STORE_UNIT.replace(':type', 'mac'), img: mac },
  { name: 'iPad', link: RouteNames.STORE_UNIT.replace(':type', 'ipad'), img: ipad },
  { name: 'iPhone', link: RouteNames.STORE_UNIT.replace(':type', 'iphone'), img: iphone },
  { name: 'Watch', link: RouteNames.STORE_UNIT.replace(':type', 'watch'), img: watch },
  { name: 'AirPods', link: RouteNames.STORE_UNIT.replace(':type', 'airpods'), img: airpods }
];
