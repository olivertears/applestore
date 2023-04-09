import { IAddress } from '../../../../../interfaces';

export interface AddressItemProps {
  address?: Omit<IAddress, 'id' | 'isActive'>;
  onClick?: () => void;
}
