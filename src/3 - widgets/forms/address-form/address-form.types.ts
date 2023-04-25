import { IAddress } from '@entities/address/types';

export interface AddressFormProps {
  address?: IAddress;
  hideModal: () => void;
}
