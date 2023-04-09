import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Loader, Row, Text } from '../../../../ui';
import { CheckboxIcon, DeleteIcon } from '../../../../ui/icons';
import { addressService } from '../../../../../services/address';
import { IAddress } from '../../../../../interfaces';
import { AddressFormProps } from './address-form.types';
import { AddressItem } from '../../components/address-item';

export const AddressForm: FC<AddressFormProps> = ({ address, hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<Omit<IAddress, 'id' | 'isActive'>>({
    defaultValues: {
      country: address?.country || '',
      state: address?.state || '',
      city: address?.city || '',
      street: address?.street || '',
      house: address?.house || '',
      apartment: address?.apartment || ''
    }
  });

  const onSubmit = (data: Omit<IAddress, 'id' | 'isActive'>) => {
    setIsLoading(true);
    address
      ? addressService
          .updateAddress({ ...data, id: address.id })
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : addressService
          .addAddress(data)
          .then(hideModal)
          .finally(() => setIsLoading(false));
  };

  const onDelete = (id: number) => {
    setIsLoading(true);
    addressService
      .deleteAddress(id)
      .then(hideModal)
      .finally(() => setIsLoading(false));
  };

  const onActiveStatusChange = (id: number) => {
    setIsLoading(true);
    addressService.setActive(id).finally(() => setIsLoading(false));
  };

  return (
    <Form maxWidth="300px" onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Text type="header" textAlign="center">
        Адрес
      </Text>
      <AddressItem address={getValues()} />
      <Input
        type="letters"
        preventPaste
        label="Страна"
        value={watch('country')}
        error={errors.country?.message}
        {...register('country', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        type="letters"
        preventPaste
        label="Область"
        value={watch('state')}
        error={errors.state?.message}
        {...register('state', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        type="letters"
        preventPaste
        label="Город"
        value={watch('city')}
        error={errors.city?.message}
        {...register('city', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        type="letters"
        preventPaste
        label="Улица"
        value={watch('street')}
        error={errors.street?.message}
        {...register('street', {
          required: 'Это поле обязательно'
        })}
      />
      <Row>
        <Input
          label="Дом"
          value={watch('house')}
          error={errors.house?.message}
          {...register('house', {
            required: 'Это поле обязательно'
          })}
        />
        <Input
          label="Квартира"
          value={watch('apartment')}
          error={errors.apartment?.message}
          {...register('apartment')}
        />
      </Row>
      <Row>
        <Button type="submit">{address ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
        {address?.id && (
          <>
            <CheckboxIcon
              checked={address.isActive}
              onClick={() => onActiveStatusChange(address?.id)}
            />
            <DeleteIcon onClick={() => onDelete(address?.id)} />
          </>
        )}
      </Row>
    </Form>
  );
};
