import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Title } from '../../../../ui';
import { UpdateUserData } from '../../../../../api/user';
import {
  emailRegex,
  letterValidator,
  numberValidator,
  pasteValidator
} from '../../../../../utils/validators';

export const UserForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<UpdateUserData>({
    defaultValues: { lastname: '', firstname: '', email: '', phone: '' }
  });

  const onSubmit = (data: UpdateUserData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Личная информация</Title>
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
        type="email"
        label="Логин"
        value={watch('email')}
        error={errors.email?.message}
        {...register('email', {
          required: 'Это поле обязательно',
          pattern: { value: emailRegex, message: 'Указанный адрес электронной почты не существует' }
        })}
      />
      <Input
        label="Телефон"
        value={watch('phone')}
        error={errors.phone?.message}
        onPaste={pasteValidator}
        onKeyDown={numberValidator}
        {...register('phone', {
          required: 'Это поле обязательно'
        })}
      />
      <Button type="submit">СОХРАНИТЬ</Button>
    </Form>
  );
};
