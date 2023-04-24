import { AxiosResponse } from 'axios';
import { privateApi } from '@shared/constants/api';
import { IAddress } from '../../../interfaces';
import { IAddressApi } from './address.types';

class AddressApi implements IAddressApi {
  endpoint = 'addresses' as const;

  addAddress(addAddressData: Omit<IAddress, 'id' | 'status'>): Promise<AxiosResponse<IAddress>> {
    return privateApi.post(this.endpoint, addAddressData);
  }

  deleteAddress(id: number): Promise<AxiosResponse> {
    return privateApi.delete(this.endpoint + '/' + id);
  }

  getAddresses(): Promise<AxiosResponse<IAddress[]>> {
    return privateApi.get(this.endpoint);
  }

  updateAddress(updateAddressData: Omit<IAddress, 'status'>): Promise<AxiosResponse<IAddress>> {
    return privateApi.put(this.endpoint, updateAddressData);
  }

  setActive(id: number): Promise<AxiosResponse<IAddress[]>> {
    return privateApi.put(this.endpoint + '/' + id + '/setActive');
  }
}

export const addressApi = new AddressApi();
