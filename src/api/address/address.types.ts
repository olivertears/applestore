import { AxiosResponse } from 'axios';
import { IAddress } from '../../interfaces';

export interface IAddressApi {
  endpoint: 'addresses';
  addAddress: (
    addAddressData: Omit<IAddress, 'id' | 'isActive'>
  ) => Promise<AxiosResponse<IAddress>>;
  deleteAddress: (id: number) => Promise<AxiosResponse>;
  getAddresses: () => Promise<AxiosResponse<IAddress[]>>;
  updateAddress: (
    updateAddressData: Omit<IAddress, 'isActive'>
  ) => Promise<AxiosResponse<IAddress>>;
  setActive: (id: number) => Promise<AxiosResponse<IAddress>>;
}
