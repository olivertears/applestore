import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Row, Title } from '../../../../ui';
import { cardToCardFormValuesAdapter } from '../../adapters';
import { CardFormProps, CardFormValues } from './card-form.types';
import { CardItem } from '../../components/card-item';
import { DeleteIcon } from '../../../../ui/icons';
import {
  englishLetterValidator,
  numberValidator,
  pasteValidator
} from '../../../../../utils/validators';

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
        onPaste={pasteValidator}
        onKeyDown={numberValidator}
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
          label="Месяц"
          value={watch('month')}
          error={errors.month?.message}
          onPaste={pasteValidator}
          onKeyDown={numberValidator}
          {...register('month', {
            required: 'Это поле обязательно'
          })}
        />
        <Input
          label="Год"
          value={watch('year')}
          error={errors.year?.message}
          onPaste={pasteValidator}
          onKeyDown={numberValidator}
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
