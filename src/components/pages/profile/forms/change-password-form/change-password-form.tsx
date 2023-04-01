import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Text } from '../../../../ui';
import { ChangePasswordData } from '../../../../../api/user';

export const ChangePasswordForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ChangePasswordData>({ defaultValues: { oldPassword: '', newPassword: '' } });

  const onSubmit = (data: ChangePasswordData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text type="header" textAlign="center">
        Изменить пароль
      </Text>
      <Input
        type="password"
        label="Старый пароль"
        value={watch('oldPassword')}
        error={errors.oldPassword?.message}
        {...register('oldPassword', {
          required: 'Это поле обязательно',
          minLength: { value: 6, message: 'Длина пароля не может быть менее 6 символов' }
        })}
      />
      <Input
        type="password"
        label="Новый пароль"
        value={watch('newPassword')}
        error={errors.newPassword?.message}
        {...register('newPassword', {
          required: 'Это поле обязательно',
          minLength: { value: 6, message: 'Длина пароля не может быть менее 6 символов' }
        })}
      />
      <Button type="submit">ВОЙТИ</Button>
    </Form>
  );
};
