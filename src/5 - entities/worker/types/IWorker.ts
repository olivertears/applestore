import { IUser } from '@entities/user/types';

export interface IWorker extends IUser {
  salary: number;
  employmentDate: string;
  contract: number;
}
