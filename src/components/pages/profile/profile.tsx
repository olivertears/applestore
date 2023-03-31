import { FC } from 'react';
import { Divider, PageWrap, Row, Text } from '../../ui';
import { UserForm } from './forms/user-form';
import { AddressList } from './components/address-list';
import { CardSlider } from './components/card-slider';
import { ChangePasswordForm } from './forms/change-password-form';
import { Avatar } from './components/avatar';

export const Profile: FC = () => {
  return (
    <PageWrap>
      <Text type="header">Личная информация</Text>
      <Row>
        <Avatar />
        <UserForm />
      </Row>
      <Divider />
      <CardSlider />
      <Divider />
      <AddressList />
      <Divider />
      <ChangePasswordForm />
    </PageWrap>
  );
};
