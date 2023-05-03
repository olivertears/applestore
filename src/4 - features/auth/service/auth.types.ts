import { AuthenticateData, RegisterData } from '@features/auth/types';
import { IUser } from '@entities/user/types';

export interface IAuthService {
  token$: string;
  authenticate: (authenticateData: AuthenticateData) => Promise<IUser>;
  register: (registerData: RegisterData) => void;
}
