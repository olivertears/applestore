import { FC } from 'react';
import { Divider, PageWrap } from '../../ui';
import { UserForm } from './forms/user-form';
import { AddressList } from './components/address-list';
import { CardSlider } from './components/card-slider';

export const Profile: FC = () => {
  return (
    <PageWrap>
      <UserForm />
      <Divider />
      <CardSlider />
      <Divider />
      <AddressList />
    </PageWrap>
  );
};
