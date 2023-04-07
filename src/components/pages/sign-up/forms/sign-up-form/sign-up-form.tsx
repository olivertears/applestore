import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { emailRegex } from '../../../../../utils';
import { RouteNames } from '../../../../templates/router';
import { Button, Form, Input, Loader, Text } from '../../../../ui';
import { RegisterData } from '../../../../../api/auth';
import { authService } from '../../../../../services/auth';

export const SignUpForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    resetField,
    formState: { errors }
  } = useForm<RegisterData>({
    defaultValues: { lastname: '', firstname: '', email: '', password: '' }
  });

  const onSubmit = (data: RegisterData) => {
    setIsLoading(true);
    authService
      .register(data)
      .then(() => navigate(RouteNames.PROFILE))
      .catch((error) => {
        resetField('email');
        setError('email', { type: 'custom', message: error.message }, { shouldFocus: true });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text type="header" textAlign="center">
        Регистрация
      </Text>
      <Input
        type="letters"
        preventPaste
        label="Имя"
        value={watch('firstname')}
        error={errors.firstname?.message}
        {...register('firstname', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        type="letters"
        preventPaste
        label="Фамилия"
        value={watch('lastname')}
        error={errors.lastname?.message}
        {...register('lastname', {
          required: 'Это поле обязательно'
        })}
      />
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
        {isLoading ? <Loader /> : 'ЗАРЕГИСТРИРОВАТЬСЯ'}
      </Button>
    </Form>
  );
};
