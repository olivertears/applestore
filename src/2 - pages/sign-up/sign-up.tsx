import { FC } from 'react';
import { PageWrap } from '@shared/ui';
import { SignUpForm } from '@widgets/forms/sign-up-form';

export const SignUp: FC = () => {
  return (
    <PageWrap>
      <SignUpForm />
    </PageWrap>
  );
};
