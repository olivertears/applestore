import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { RouteNames } from '@app/router';
import { AuthenticateData } from '@features/auth/types';
import { emailRegex } from '@shared/utils';
import { Button, Form, Input, Loader, Text } from '@shared/ui';
import { authService } from '@features/auth/service';
import { UserRoleEnum } from '@entities/user/types';

export const SignInForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    resetField,
    formState: { errors }
  } = useForm<AuthenticateData>({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: AuthenticateData) => {
    setIsLoading(true);
    authService
      .authenticate(data)
      .then(({ role }) => {
        switch (role) {
          case UserRoleEnum.USER:
            return navigate(RouteNames.PROFILE);
          case UserRoleEnum.MANAGER:
            return navigate(RouteNames.ORDERS);
          case UserRoleEnum.ADMIN:
            return navigate(RouteNames.APPLICATIONS);
        }
      })
      .catch((error) => {
        resetField('email');
        resetField('password');
        setError('email', { type: 'custom', message: error.message }, { shouldFocus: true });
        setError('password', { type: 'custom', message: error.message });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text type="header" textAlign="center">
        Авторизация
      </Text>
      <Input
        label="Логин"
        value={watch('email')}
        error={errors.email?.message}
        {...register('email', {
          required: 'Это поле обязательно',
          pattern: { value: emailRegex, message: 'Указанный адрес электронной почты не существует' }
        })}
      />
      <Input
        type="password"
        label="Пароль"
        value={watch('password')}
        error={errors.password?.message}
        {...register('password', {
          required: 'Это поле обязательно',
          minLength: { value: 6, message: 'Длина пароля не может быть менее 6 символов' }
        })}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'ВОЙТИ'}
      </Button>
    </Form>
  );
};
