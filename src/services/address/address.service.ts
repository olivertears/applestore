import { action, makeObservable, observable } from 'mobx';
import { Catch } from '../../utils';
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

  @Catch
  async addAddress(addAddressData: IAddress) {
    const newAddress = await addressApi.addAddress(addAddressData);
    this.setAddresses([...this.addresses$, newAddress.data]);
  }

  @Catch
  async deleteAddress(id: string) {
    await addressApi.deleteAddress(id);
    this.setAddresses(this.addresses$.filter((address) => address.id !== id));
  }

  @Catch
  async getAddresses() {
    const addresses = await addressApi.getAddresses();
    this.setAddresses(addresses.data);
  }

  @Catch
  async updateAddress(updateAddressData: IAddress) {
    const updatedAddress = await addressApi.updateAddress(updateAddressData);
    this.setAddresses(
      this.addresses$.map((address) =>
        address.id === updateAddressData.id ? updatedAddress.data : address
      )
    );
  }
}

export const addressService = new AddressService();
