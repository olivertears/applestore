import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Column, Form, Input, Loader, Text } from '@shared/ui';
import { ChangePasswordData } from '@entities/user/api';
import { userService } from '../../../../../services/user';
import { Modal } from '../../../../../6 - shared/ui/modal';
import { useModal } from '../../../../../6 - shared/hooks';

export const ChangePasswordForm: FC = () => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    resetField,
    reset,
    formState: { errors }
  } = useForm<ChangePasswordData>({ defaultValues: { oldPassword: '', newPassword: '' } });

  const onSubmit = (data: ChangePasswordData) => {
    setIsLoading(true);
    userService
      .changePassword(data)
      .then(() => {
        reset();
        showModal();
      })
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
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <Column>
          <Text type="header" textAlign="center">
            Поздравляем
          </Text>
          <Text type="param" textAlign="center">
            Ваш пароль был успешно изменен
          </Text>
        </Column>
      </Modal>
    </Form>
  );
};
