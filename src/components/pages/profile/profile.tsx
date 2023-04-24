import { FC } from 'react';
import { Divider, PageWrap, Row, Text } from '@shared/ui';
import { UserInfo } from './components/user-info';
import { AddressList } from './components/address-list';
import { CardSlider } from './components/card-slider';
import { ChangePasswordForm } from './forms/change-password-form';
import { Avatar } from './components/avatar';

export const Profile: FC = () => {
  return (
    <PageWrap>
      <Text type="header" textAlign="center" margin="0 0 15px">
        Личная информация
      </Text>
      <Row>
        <Avatar />
        <UserInfo />
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
