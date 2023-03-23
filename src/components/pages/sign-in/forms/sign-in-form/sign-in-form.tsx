import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Title } from '../../../../ui';
import { userService } from '../../../../../services/user';
import { RouteNames } from '../../../../templates/router';
import { IUser } from '../../../../../interfaces';
import { AuthenticateData } from '../../../../../api/auth';

export const SignInForm: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AuthenticateData>({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: AuthenticateData) => {
    console.log(data);
    userService.setUser({} as IUser);
    navigate(RouteNames.PROFILE);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Авторизация</Title>
      <Input
        type="email"
        label="Логин"
        value={watch('email')}
        error={errors.email?.message}
        {...register('email', { required: true })}
      />
      <Input
        type="password"
        label="Пароль"
        value={watch('password')}
        error={errors.password?.message}
        {...register('password', {
          required: true,
          minLength: { value: 6, message: 'The password is too short' }
        })}
      />
      <Button type="submit">ВОЙТИ</Button>
    </Form>
  );
};
