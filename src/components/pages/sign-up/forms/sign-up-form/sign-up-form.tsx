import { FC } from 'react';
import { Button, Form, Input, Title } from '../../../../ui';
import { useForm } from 'react-hook-form';
import { RegisterData } from '../../../../../api/auth';

export const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegisterData>({
    defaultValues: { lastname: '', firstname: '', email: '', password: '' }
  });

  const onSubmit = (data: RegisterData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Регистрация</Title>
      <Input
        label="Имя"
        value={watch('firstname')}
        error={errors.firstname?.message}
        {...register('firstname', {
          required: true
        })}
      />
      <Input
        label="Фамилия"
        value={watch('lastname')}
        error={errors.lastname?.message}
        {...register('lastname', {
          required: true
        })}
      />
      <Input
        type="email"
        label="Логин"
        value={watch('email')}
        error={errors.email?.message}
        {...register('email', {
          required: true
        })}
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
      <Button type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
    </Form>
  );
};
