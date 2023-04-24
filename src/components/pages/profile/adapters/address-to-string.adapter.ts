import { IAddress } from '../../../../interfaces';
import { removeExtraSpaces } from '../../../../6 - shared/utils';

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
