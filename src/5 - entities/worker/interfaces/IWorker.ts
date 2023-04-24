import { IUser } from '@entities/user/interfaces/IUser';

export interface IWorker extends IUser {
  salary: number;
  employmentDate: string;
  contract: number;
}
