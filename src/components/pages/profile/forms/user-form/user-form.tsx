import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../../../../utils';
import { Button, Form, Input } from '../../../../ui';
import { UpdateUserData } from '../../../../../api/user';

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
        preventPaste
        type="integer"
        label="Телефон"
        value={watch('phone')}
        error={errors.phone?.message}
        {...register('phone', {
          required: 'Это поле обязательно'
        })}
      />
      <Button type="submit">СОХРАНИТЬ</Button>
    </Form>
  );
};
