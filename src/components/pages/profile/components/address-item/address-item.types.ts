import { IAddress } from '../../../../../interfaces';

export interface AddressItemProps {
  address?: Omit<IAddress, 'id' | 'status'>;
  onClick?: () => void;
}
