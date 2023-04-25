import { AuthenticateData, RegisterData } from '@features/auth/types';

export interface IAuthService {
  token$: string;
  authenticate: (authenticateData: AuthenticateData) => void;
  register: (registerData: RegisterData) => void;
}
