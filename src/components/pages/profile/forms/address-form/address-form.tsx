import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Row, Text } from '../../../../ui';
import { IAddress } from '../../../../../interfaces';
import { AddressFormProps } from './address-form.types';
import { AddressItem } from '../../components/address-item';
import { letterValidator, pasteValidator } from '../../../../../utils/validators';

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
    <Form maxWidth="300px" onSubmit={handleSubmit(onSubmit)}>
      <Text type="header" textAlign="center">
        Адрес
      </Text>
      <AddressItem address={getValues()} />
      <Input
        label="Страна"
        value={watch('country')}
        error={errors.country?.message}
        onPaste={pasteValidator}
        onKeyDown={letterValidator}
        {...register('country', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        label="Область"
        value={watch('state')}
        error={errors.state?.message}
        onPaste={pasteValidator}
        onKeyDown={letterValidator}
        {...register('state', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        label="Город"
        value={watch('city')}
        error={errors.city?.message}
        onPaste={pasteValidator}
        onKeyDown={letterValidator}
        {...register('city', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        label="Улица"
        value={watch('street')}
        error={errors.street?.message}
        onPaste={pasteValidator}
        onKeyDown={letterValidator}
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
      <Button type="submit">{address ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
