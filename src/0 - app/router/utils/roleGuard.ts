import { userService } from '@entities/user/service';
import { RouteNames } from '@app/router';
import { UserRoleEnum } from '@entities/user/types';

export const roleGuard = (role: UserRoleEnum) => () =>
  userService.user$?.role === role ? '' : RouteNames.NOT_FOUND;
