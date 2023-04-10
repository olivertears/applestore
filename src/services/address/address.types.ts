import { IAddress } from '../../interfaces';

export interface IAddressService {
  addresses$: IAddress[];
  addAddress: (addAddressData: Omit<IAddress, 'id' | 'status'>) => void;
  deleteAddress: (id: number) => void;
  getAddresses: () => void;
  updateAddress: (updateAddressData: Omit<IAddress, 'status'>) => void;
  setActive: (id: number) => void;
}
