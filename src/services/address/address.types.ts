import { IAddress } from '../../interfaces';

export interface IAddressService {
  addresses$: IAddress[];
  addAddress: (addAddressData: Omit<IAddress, 'id' | 'isActive'>) => void;
  deleteAddress: (id: number) => void;
  getAddresses: () => void;
  updateAddress: (updateAddressData: Omit<IAddress, 'isActive'>) => void;
  setActive: (id: number) => void;
}
