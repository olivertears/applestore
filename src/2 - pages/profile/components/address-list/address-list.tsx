import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { AddressForm } from '@widgets/forms/address-form';
import { addressService } from '@entities/address/service';
import { AddressItem } from '@entities/address/components';
import { useModal } from '@shared/hooks';
import { AddIcon } from '@shared/icons';
import { Column, Modal, Text } from '@shared/ui';

export const AddressList: FC = observer(() => {
  const { isModalOpen, showModal, hideModal, selectedItemId } = useModal();

  useEffect(() => {
    addressService.getAddresses();
  }, []);

  return (
    <Column>
      <Text type="header" textAlign="center">
        Адреса
      </Text>
      {addressService.addresses$.map((address) => (
        <AddressItem key={address.id} address={address} onClick={() => showModal(address.id)} />
      ))}
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <AddressForm
          hideModal={hideModal}
          address={addressService.addresses$.find((address) => address.id === selectedItemId)}
        />
      </Modal>
      <AddIcon onClick={showModal} />
    </Column>
  );
});
