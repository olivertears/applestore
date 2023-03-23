import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Title } from '../../../../ui';
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
      <Title>Личная информация</Title>
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
        label="Телефон"
        value={watch('phone')}
        error={errors.phone?.message}
        {...register('phone', {
          required: true
        })}
      />
      <Button type="submit">СОХРАНИТЬ</Button>
    </Form>
  );
};
