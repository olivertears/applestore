import { AuthenticateData, RegisterData } from '../../api/auth';

export interface IAuthService {
  token$: string;
  authenticate: (authenticateData: AuthenticateData) => void;
  register: (registerData: RegisterData) => void;
}
