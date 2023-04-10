import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Color, Column, Text } from '../../../../ui';
import { Modal } from '../../../../templates/modal';
import { useModal } from '../../../../../hooks';
import { UserForm } from '../../forms/user-form';
import { userService } from '../../../../../services/user';

export const UserInfo: FC = observer(() => {
  const { isModalOpen, showModal, hideModal } = useModal();

  return (
    <Column>
      <Text type="header" textAlign="center">
        {userService.user$?.firstName} {userService.user$?.lastName}
      </Text>
      <Text type="param">
        Логин: <Color>{userService.user$?.email}</Color>
      </Text>
      <Text type="param">
        Телефон: <Color>{userService.user$?.phoneNumber}</Color>
      </Text>
      <Button onClick={() => showModal()}>РЕДАКТИРОВАТЬ</Button>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <UserForm hideModal={hideModal} />
      </Modal>
    </Column>
  );
});
