import { FC } from 'react';

import { Avatar } from '@widgets/components/avatar';
import { ChangePasswordForm } from '@widgets/forms/change-password-form';
import { Divider, PageWrap, Row, Text } from '@shared/ui';
import { UserInfo } from './components/user-info';
import { AddressList } from './components/address-list';
import { CardSlider } from './components/card-slider';

const Profile: FC = () => {
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

export default Profile;
