import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Row, Text } from '../../../../ui';
import { cardToCardFormValuesAdapter } from '../../adapters';
import { CardFormProps, CardFormValues } from './card-form.types';
import { CardItem } from '../../components/card-item';
import { DeleteIcon } from '../../../../ui/icons';

export const CardForm: FC<CardFormProps> = ({ card }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<CardFormValues>({
    defaultValues: cardToCardFormValuesAdapter(card)
  });

  const onSubmit = (data: CardFormValues) => {
    console.log(data);
  };

  return (
    <Form maxWidth="300px" onSubmit={handleSubmit(onSubmit)}>
      <Text type="header" textAlign="center">
        Карта
      </Text>
      <CardItem card={getValues()} isActive />
      <Input
        type="integer"
        preventPaste
        label="Номер"
        value={watch('number')}
        error={errors.number?.message}
        maxLength={16}
        {...register('number', {
          required: 'Это поле обязательно',
          minLength: { value: 16, message: 'Номер должен содержать 16 цифр' }
        })}
      />
      <Input
        type="english"
        preventPaste
        label="Владелец"
        value={watch('owner')}
        error={errors.owner?.message}
        {...register('owner', {
          required: 'Это поле обязательно'
        })}
      />
      <Row>
        <Input
          type="integer"
          preventPaste
          label="Месяц"
          value={watch('month')}
          error={errors.month?.message}
          {...register('month', {
            required: 'Это поле обязательно'
          })}
        />
        <Input
          type="integer"
          preventPaste
          label="Год"
          value={watch('year')}
          error={errors.year?.message}
          {...register('year', {
            required: 'Это поле обязательно'
          })}
        />
      </Row>
      <Row>
        <Button type="submit">{card ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
        {card?.id && <DeleteIcon />}
      </Row>
    </Form>
  );
};
