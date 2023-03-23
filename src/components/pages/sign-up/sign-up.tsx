import { FC } from 'react';
import { PageWrap } from '../../ui';
import { SignUpForm } from './forms/sign-up-form';

export const SignUp: FC = () => {
  return (
    <PageWrap>
      <SignUpForm />
    </PageWrap>
  );
};
