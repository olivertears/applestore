import { FC } from 'react';
import { addressService } from '../../../../../services/address';
import { Column, Row, Text } from '../../../../ui';
import { AddIcon, DeleteIcon } from '../../../../ui/icons';
import { useModal } from '../../../../../hooks';
import { Modal } from '../../../../templates/modal';
import { AddressForm } from '../../forms/address-form';
import { AddressItem } from '../address-item';

export const AddressList: FC = () => {
  const { isModalOpen, showModal, hideModal, selectedItemId } = useModal();

  return (
    <Column>
      <Text type="header" textAlign="center">
        Адреса
      </Text>
      {addressService.addresses$.map((address) => (
        <Row key={address.id}>
          <AddressItem address={address} onClick={() => showModal(address.id)} />
          <DeleteIcon />
        </Row>
      ))}
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <AddressForm
          address={addressService.addresses$.find((address) => address.id === selectedItemId)}
        />
      </Modal>
      <AddIcon onClick={showModal} />
    </Column>
  );
};
