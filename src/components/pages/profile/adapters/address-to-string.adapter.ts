import { IAddress } from '../../../../interfaces';
import { removeSpaces } from '../utils';

export const addressToStringAdapter = (address?: IAddress): string =>
  removeSpaces(
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
