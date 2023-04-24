import { FC } from 'react';
import { PageWrap } from '@shared/ui';
import { SignInForm } from '@widgets/forms/sign-in-form';

export const SignIn: FC = () => {
  return (
    <PageWrap>
      <SignInForm />
    </PageWrap>
  );
};
