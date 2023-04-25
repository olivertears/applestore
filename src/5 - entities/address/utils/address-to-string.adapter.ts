import { removeExtraSpaces } from '@shared/utils';
import { IAddress } from '../types';

export const addressToStringAdapter = (address?: Omit<IAddress, 'id' | 'status'>): string =>
  removeExtraSpaces(
    removeEmptyAndJoin(
      [
        removeEmptyAndJoin(
          [address?.street, removeEmptyAndJoin([address?.house, address?.apartment], ' / ')],
          ' '
        ),
        address?.city,
        address?.state,
        address?.country
      ],
      ', '
    )
  ) || '‎';

const removeEmptyAndJoin = (arr: (string | undefined)[], separator: string): string =>
  arr.filter((field) => field !== '').join(separator);
