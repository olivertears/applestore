import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IAddress } from '../../interfaces';
import { IAddressApi } from './address.types';

const api = createApi(true);

class AddressApi implements IAddressApi {
  endpoint = 'addresses' as const;

  @Catch
  addAddress(addAddressData: Omit<IAddress, 'id' | 'status'>): Promise<AxiosResponse<IAddress>> {
    return api.post(this.endpoint, addAddressData);
  }

  @Catch
  deleteAddress(id: number): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  @Catch
  getAddresses(): Promise<AxiosResponse<IAddress[]>> {
    return api.get(this.endpoint);
  }

  @Catch
  updateAddress(updateAddressData: Omit<IAddress, 'status'>): Promise<AxiosResponse<IAddress>> {
    return api.put(this.endpoint, updateAddressData);
  }

  setActive(id: number): Promise<AxiosResponse<IAddress>> {
    return api.put(this.endpoint + '/' + id + '/setActive');
  }
}

export const addressApi = new AddressApi();
