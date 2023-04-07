import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Loader, Text } from '../../../../ui';
import { userService } from '../../../../../services/user';
import { RouteNames } from '../../../../templates/router';
import { IUser } from '../../../../../interfaces';
import { AuthenticateData } from '../../../../../api/auth';
import { emailRegex } from '../../../../../utils/validators';
import { authService } from '../../../../../services/auth';

export const SignInForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors }
  } = useForm<AuthenticateData>({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: AuthenticateData) => {
    setIsLoading(true);
    authService
      .authenticate(data)
      .then(() => navigate(RouteNames.PROFILE))
      .catch((error) => {
        reset();
        setError('email', { type: 'custom', message: error.message }, { shouldFocus: true });
        setError('password', { type: 'custom', message: error.message }, { shouldFocus: true });
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
