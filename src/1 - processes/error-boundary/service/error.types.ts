import { IError } from '@processes/error-boundary/types';

export interface IErrorService {
  errors$: IError[];
  addError(error: Omit<IError, 'id'>): void;
  removeError(errorId: number): void;
}
