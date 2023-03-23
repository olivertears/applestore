import { AxiosResponse } from 'axios';
import { IAddress } from '../../interfaces';

export interface IAddressApi {
  endpoint: 'addresses';
  addAddress: (address: IAddress) => Promise<AxiosResponse<IAddress>>;
  deleteAddress: (id: string) => Promise<AxiosResponse>;
  getAddresses: () => Promise<AxiosResponse<IAddress[]>>;
  updateAddress: (address: IAddress) => Promise<AxiosResponse<IAddress>>;
}
