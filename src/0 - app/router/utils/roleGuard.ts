import { userService } from '@entities/user/service';
import { RouteNames } from '../router.types';

export const roleGuard = (role: string) => () =>
  userService.user$?.role === role ? '' : RouteNames.NOT_FOUND;
