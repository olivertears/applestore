import { errorService } from '../services/error';
import { IError } from '../interfaces';

export const Catch = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const fn = descriptor.value;
  descriptor.value = async (...args: any[]) => {
    try {
      await fn.apply(this, args);
    } catch (error: unknown) {
      errorService.addError(error as IError);
    }
  };
};
