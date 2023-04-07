import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IAddress } from '../../interfaces';
import { IAddressApi } from './address.types';

const api = createApi(true);

class AddressApi implements IAddressApi {
  endpoint = 'addresses' as const;

  @Catch
  addAddress(addAddressData: IAddress): Promise<AxiosResponse<IAddress>> {
    return api.post(this.endpoint, addAddressData);
  }

  @Catch
  deleteAddress(id: string): Promise<AxiosResponse> {
    return api.delete(this.endpoint + '/' + id);
  }

  @Catch
  getAddresses(): Promise<AxiosResponse<IAddress[]>> {
    return api.get(this.endpoint);
  }

  @Catch
  updateAddress(updateAddressData: IAddress): Promise<AxiosResponse<IAddress>> {
    return api.post(this.endpoint, updateAddressData);
  }
}

export const addressApi = new AddressApi();
