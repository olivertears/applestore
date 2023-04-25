import { FC } from 'react';
import { PageWrap } from '@shared/ui';
import { SignUpForm } from '@widgets/forms/sign-up-form';

const SignUp: FC = () => {
  return (
    <PageWrap>
      <SignUpForm />
    </PageWrap>
  );
};

export default SignUp;
