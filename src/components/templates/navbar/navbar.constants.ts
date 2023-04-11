import { Link } from './navbar.types';
import { RouteNames } from '../router/router.types';

export const NAVBAR_USER_LINKS: Link[] = [
  { name: 'Профиль', link: RouteNames.PROFILE },
  { name: 'Сохраненные', link: RouteNames.FAVORITES },
  { name: 'Корзина', link: RouteNames.CART },
  { name: 'Заказы', link: RouteNames.ORDERS }
];

export const NAVBAR_COMMON_LINKS: Link[] = [
  { name: 'Вход', link: RouteNames.SIGN_IN },
  { name: 'Регистрация', link: RouteNames.SIGN_UP },
  { name: 'Каталог', link: RouteNames.CATALOG }
];
