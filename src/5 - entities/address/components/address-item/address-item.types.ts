import { IAddress } from '../../types';

export interface AddressItemProps {
  address?: Omit<IAddress, 'id' | 'status'>;
  onClick?: () => void;
}
