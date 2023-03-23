import { AxiosResponse } from 'axios';
import { IAddress } from '../../interfaces';
import { api } from '../api';
import { IAddressApi } from './address.types';

class AddressApi implements IAddressApi {
  endpoint = 'addresses' as const;

  addAddress(address: IAddress): Promise<AxiosResponse<IAddress>> {
    return api.post(this.endpoint, address);
  }

  deleteAddress(id: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  getAddresses(): Promise<AxiosResponse<IAddress[]>> {
    return api.get(this.endpoint);
  }

  updateAddress(address: IAddress): Promise<AxiosResponse<IAddress>> {
    return api.post(this.endpoint, address);
  }
}

export const userApi = new AddressApi();
