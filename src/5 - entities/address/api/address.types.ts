import { AxiosResponse } from 'axios';
import { IAddress } from '../../../interfaces';

export interface IAddressApi {
  endpoint: 'addresses';
  addAddress: (addAddressData: Omit<IAddress, 'id' | 'status'>) => Promise<AxiosResponse<IAddress>>;
  deleteAddress: (id: number) => Promise<AxiosResponse>;
  getAddresses: () => Promise<AxiosResponse<IAddress[]>>;
  updateAddress: (updateAddressData: Omit<IAddress, 'status'>) => Promise<AxiosResponse<IAddress>>;
  setActive: (id: number) => Promise<AxiosResponse<IAddress[]>>;
}
