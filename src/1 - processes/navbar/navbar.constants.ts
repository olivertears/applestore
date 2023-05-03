import { Link } from './navbar.types';
import { RouteNames } from '@app/router/router.types';
import { UserRoleEnum } from '@entities/user/types';

export const NAVBAR_UNAUTHORIZED_LINKS: Link[] = [
  { name: 'Магазин', link: RouteNames.STORE },
  { name: 'Вход', link: RouteNames.SIGN_IN },
  { name: 'Регистрация', link: RouteNames.SIGN_UP }
];

export const NAVBAR_USER_LINKS: Link[] = [
  { name: 'Магазин', link: RouteNames.STORE },
  { name: 'Сохраненные', link: RouteNames.FAVORITES },
  { name: 'Корзина', link: RouteNames.CART },
  { name: 'Мои заказы', link: RouteNames.ORDERS },
  { name: 'Профиль', link: RouteNames.PROFILE }
];

export const NAVBAR_MANAGER_LINKS: Link[] = [
  { name: 'Заказы', link: RouteNames.ORDERS },
  { name: 'Каталог', link: RouteNames.CATALOG },
  { name: 'Чат', link: RouteNames.CHAT },
  { name: 'Статистика', link: RouteNames.STATISTICS }
];

export const NAVBAR_ADMIN_LINKS: Link[] = [
  { name: 'Заявления', link: RouteNames.APPLICATIONS },
  { name: 'Работники', link: RouteNames.WORKERS }
];

export const NAVBAR_AUTHORIZED_LINKS: { [key in UserRoleEnum]: Link[] } = {
  [UserRoleEnum.USER]: NAVBAR_USER_LINKS,
  [UserRoleEnum.MANAGER]: NAVBAR_MANAGER_LINKS,
  [UserRoleEnum.ADMIN]: NAVBAR_ADMIN_LINKS
};
