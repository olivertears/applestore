import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Row, Title } from '../../../../ui';
import { IAddress } from '../../../../../interfaces';
import { AddressFormProps } from './address-form.types';
import { AddressItem } from '../../components/address-item';

export const AddressForm: FC<AddressFormProps> = ({ address }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<IAddress>({
    defaultValues: {
      country: address?.country || '',
      state: address?.state || '',
      city: address?.city || '',
      street: address?.street || '',
      house: address?.house || '',
      apartment: address?.apartment || ''
    }
  });

  const onSubmit = (data: IAddress) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Адрес</Title>
      <AddressItem address={getValues()} />
      <Input
        label="Страна"
        value={watch('country')}
        error={errors.country?.message}
        {...register('country', {
          required: true
        })}
      />
      <Input
        label="Область"
        value={watch('state')}
        error={errors.state?.message}
        {...register('state', {
          required: true
        })}
      />
      <Input
        label="Город"
        value={watch('city')}
        error={errors.city?.message}
        {...register('city', {
          required: true
        })}
      />
      <Input
        label="Улица"
        value={watch('street')}
        error={errors.street?.message}
        {...register('street', {
          required: true
        })}
      />
      <Row>
        <Input
          label="Дом"
          value={watch('house')}
          error={errors.house?.message}
          {...register('house', {
            required: true
          })}
        />
        <Input
          label="Квартира"
          value={watch('apartment')}
          error={errors.apartment?.message}
          {...register('apartment')}
        />
      </Row>
      <Button type="submit">{address ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
