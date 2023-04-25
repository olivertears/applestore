import { authService } from '@features/auth/service';
import { RouteNames } from '../router.types';

export const authGuard = () => (authService.token$ ? '' : RouteNames.SIGN_IN);
