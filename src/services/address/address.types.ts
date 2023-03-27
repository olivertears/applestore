import { IAddress } from '../../interfaces';

export interface IAddressService {
  addresses$: IAddress[];
  addAddress: (addAddressData: IAddress) => void;
  deleteAddress: (id: string) => void;
  getAddresses: () => void;
  updateAddress: (updateAddressData: IAddress) => void;
}
