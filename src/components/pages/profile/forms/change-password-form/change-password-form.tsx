import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Text } from '../../../../ui';
import { ChangePasswordData } from '../../../../../api/user';
import { userService } from '../../../../../services/user';

export const ChangePasswordForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    resetField,
    formState: { errors }
  } = useForm<ChangePasswordData>({ defaultValues: { oldPassword: '', newPassword: '' } });

  const onSubmit = (data: ChangePasswordData) => {
    setIsLoading(true);
    userService
      .changePassword(data)
      .catch((error) => {
        resetField('oldPassword');
        resetField('newPassword');
        setError('oldPassword', { type: 'custom', message: error.message }, { shouldFocus: true });
        setError('newPassword', { type: 'custom', message: error.message });
      })
      .finally(() => setIsLoading(false));
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
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'СОХРАНИТЬ'}
      </Button>
    </Form>
  );
};
