import { FC } from 'react';
import { Divider, PageWrap } from '../../ui';
import { UserForm } from './forms/user-form';
import { AddressList } from './components/address-list';
import { CardSlider } from './components/card-slider';
import { ChangePasswordForm } from './forms/change-password-form';

export const Profile: FC = () => {
  return (
    <PageWrap>
      <UserForm />
      <Divider />
      <CardSlider />
      <Divider />
      <AddressList />
      <Divider />
      <ChangePasswordForm />
    </PageWrap>
  );
};
