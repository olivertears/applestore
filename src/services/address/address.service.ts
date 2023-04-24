import { action, makeObservable, observable } from 'mobx';
import { addressApi } from '@entities/address/api';
import { IAddress } from '../../interfaces';
import { IAddressService } from './address.types';

class AddressService implements IAddressService {
  addresses$: IAddress[] = [];

  constructor() {
    makeObservable(this, {
      addresses$: observable,
      setAddresses: action
    });
  }

  setAddresses(addresses: IAddress[]) {
    this.addresses$ = addresses;
  }

  async addAddress(addAddressData: Omit<IAddress, 'id' | 'status'>) {
    const { data } = await addressApi.addAddress(addAddressData);
    this.setAddresses([...this.addresses$, data]);
  }

  async deleteAddress(id: number) {
    await addressApi.deleteAddress(id);
    this.setAddresses(this.addresses$.filter((address) => address.id !== id));
  }

  async getAddresses() {
    const { data } = await addressApi.getAddresses();
    this.setAddresses(data);
  }

  async updateAddress(updateAddressData: Omit<IAddress, 'status'>) {
    const { data } = await addressApi.updateAddress(updateAddressData);
    this.setAddresses(
      this.addresses$.map((address) => (address.id === updateAddressData.id ? data : address))
    );
  }

  async setActive(id: number) {
    const { data } = await addressApi.setActive(id);
    this.setAddresses(data);
  }
}

export const addressService = new AddressService();
