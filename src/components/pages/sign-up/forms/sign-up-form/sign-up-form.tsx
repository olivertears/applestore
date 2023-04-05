import { FC } from 'react';
import { Button, Form, Input, Text } from '../../../../ui';
import { useForm } from 'react-hook-form';
import { RegisterData } from '../../../../../api/auth';
import { emailRegex, letterValidator, pasteValidator } from '../../../../../utils/validators';

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
      <Text type="header" textAlign="center">
        Регистрация
      </Text>
      <Input
        label="Имя"
        value={watch('firstname')}
        error={errors.firstname?.message}
        onPaste={pasteValidator}
        onKeyDown={letterValidator}
        {...register('firstname', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        label="Фамилия"
        value={watch('lastname')}
        error={errors.lastname?.message}
        onPaste={pasteValidator}
        onKeyDown={letterValidator}
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
      <Button type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
    </Form>
  );
};
