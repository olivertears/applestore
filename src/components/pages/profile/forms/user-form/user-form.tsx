import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Loader } from '../../../../ui';
import { UpdateUserData } from '../../../../../api/user';
import { userService } from '../../../../../services/user';

export const UserForm: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<UpdateUserData>({
    defaultValues: {
      firstName: userService.user$?.firstName || '',
      lastName: userService.user$?.lastName || '',
      phoneNumber: userService.user$?.phoneNumber || ''
    }
  });

  const onSubmit = (data: UpdateUserData) => {
    setIsLoading(true);
    userService.updateUser(data).finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="letters"
        preventPaste
        label="Имя"
        value={watch('firstName')}
        error={errors.firstName?.message}
        {...register('firstName', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        type="letters"
        preventPaste
        label="Фамилия"
        value={watch('lastName')}
        error={errors.lastName?.message}
        {...register('lastName', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        preventPaste
        type="integer"
        label="Телефон"
        value={watch('phoneNumber')}
        error={errors.phoneNumber?.message}
        {...register('phoneNumber')}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'СОХРАНИТЬ'}
      </Button>
    </Form>
  );
});
