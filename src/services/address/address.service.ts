import { action, makeObservable, observable } from 'mobx';
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
}

export const addressService = new AddressService();
