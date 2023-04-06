import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Row, Text } from '../../../../ui';
import { cardToCardFormValuesAdapter } from '../../adapters';
import { CardFormProps, CardFormValues } from './card-form.types';
import { CardItem } from '../../components/card-item';
import { DeleteIcon } from '../../../../ui/icons';
import { englishLetterValidator, pasteValidator } from '../../../../../utils/validators';

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
        label="Номер"
        value={watch('number')}
        error={errors.number?.message}
        onPaste={pasteValidator}
        maxLength={16}
        {...register('number', {
          required: 'Это поле обязательно',
          minLength: { value: 16, message: 'Номер должен содержать 16 цифр' }
        })}
      />
      <Input
        label="Владелец"
        value={watch('owner')}
        error={errors.owner?.message}
        onPaste={pasteValidator}
        onKeyDown={englishLetterValidator}
        {...register('owner', {
          required: 'Это поле обязательно'
        })}
      />
      <Row>
        <Input
          type="integer"
          label="Месяц"
          value={watch('month')}
          error={errors.month?.message}
          onPaste={pasteValidator}
          {...register('month', {
            required: 'Это поле обязательно'
          })}
        />
        <Input
          type="integer"
          label="Год"
          value={watch('year')}
          error={errors.year?.message}
          onPaste={pasteValidator}
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
