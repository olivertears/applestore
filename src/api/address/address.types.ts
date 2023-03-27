import { AxiosResponse } from 'axios';
import { IAddress } from '../../interfaces';

export interface IAddressApi {
  endpoint: 'addresses';
  addAddress: (addAddressData: IAddress) => Promise<AxiosResponse<IAddress>>;
  deleteAddress: (id: string) => Promise<AxiosResponse>;
  getAddresses: () => Promise<AxiosResponse<IAddress[]>>;
  updateAddress: (updateAddressData: IAddress) => Promise<AxiosResponse<IAddress>>;
}
