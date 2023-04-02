import { AxiosResponse } from 'axios';
import { createApi } from '../../utils/createApi';
import { IAddress } from '../../interfaces';
import { IAddressApi } from './address.types';

const api = createApi(true);

class AddressApi implements IAddressApi {
  endpoint = 'addresses' as const;

  addAddress(addAddressData: IAddress): Promise<AxiosResponse<IAddress>> {
    return api.post(this.endpoint, addAddressData);
  }

  deleteAddress(id: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  getAddresses(): Promise<AxiosResponse<IAddress[]>> {
    return api.get(this.endpoint);
  }

  updateAddress(updateAddressData: IAddress): Promise<AxiosResponse<IAddress>> {
    return api.post(this.endpoint, updateAddressData);
  }
}

export const addressApi = new AddressApi();
