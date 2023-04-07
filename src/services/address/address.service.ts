import { action, makeObservable, observable } from 'mobx';
import { addressApi } from '../../api/address';
import { IAddress } from '../../interfaces';
import { IAddressService } from './address.types';
import { MOCKED_ADDRESSES } from './addreess.mocked';

class AddressService implements IAddressService {
  addresses$: IAddress[] = MOCKED_ADDRESSES;

  constructor() {
    makeObservable(this, {
      addresses$: observable,
      setAddresses: action
    });
  }

  setAddresses(addresses: IAddress[]) {
    this.addresses$ = addresses;
  }

  async addAddress(addAddressData: IAddress) {
    const { data } = await addressApi.addAddress(addAddressData);
    this.setAddresses([...this.addresses$, data]);
  }

  async deleteAddress(id: string) {
    await addressApi.deleteAddress(id);
    this.setAddresses(this.addresses$.filter((address) => address.id !== id));
  }

  async getAddresses() {
    const { data } = await addressApi.getAddresses();
    this.setAddresses(data);
  }

  async updateAddress(updateAddressData: IAddress) {
    const { data } = await addressApi.updateAddress(updateAddressData);
    this.setAddresses(
      this.addresses$.map((address) => (address.id === updateAddressData.id ? data : address))
    );
  }
}

export const addressService = new AddressService();
