import { IUser } from '@entities/user/types';

export type AuthResponse = {
  token: string;
  userResponse: IUser;
};
