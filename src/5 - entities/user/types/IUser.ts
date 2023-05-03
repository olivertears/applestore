export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoleEnum;
  phoneNumber: string;
  avatar: string;
}

export enum UserRoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER'
}
