import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Row, Title } from '../../../../ui';
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Карта</Title>
      <CardItem card={getValues()} isActive />
      <Input
        label="Номер"
        value={watch('number')}
        error={errors.number?.message}
        {...register('number', {
          required: true
        })}
      />
      <Input
        label="Владелец"
        value={watch('owner')}
        error={errors.owner?.message}
        {...register('owner', {
          required: true
        })}
      />
      <Row>
        <Input
          label="Месяц"
          value={watch('month')}
          error={errors.month?.message}
          {...register('month', {
            required: true
          })}
        />
        <Input
          label="Год"
          value={watch('year')}
          error={errors.year?.message}
          {...register('year', {
            required: true
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
