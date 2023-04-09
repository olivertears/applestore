import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { addressService } from '../../../../../services/address';
import { Column, Row, Text } from '../../../../ui';
import { AddIcon, DeleteIcon } from '../../../../ui/icons';
import { useModal } from '../../../../../hooks';
import { Modal } from '../../../../templates/modal';
import { AddressForm } from '../../forms/address-form';
import { AddressItem } from '../address-item';

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
