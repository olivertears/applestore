import { FC } from 'react';
import {
  Button,
  ColorRadio,
  Column,
  Fieldset,
  Form,
  OptionRadio,
  PageWrap,
  PhotoSlider,
  Text
} from '../../ui';
import { useForm } from 'react-hook-form';

export const Menu: FC = () => {
  const { register, watch, handleSubmit } = useForm({ defaultValues: { radio: '', option: '' } });

  const onSubmit = (data: { radio: string; option: string }) => {
    console.log(data);
  };

  return (
    <PageWrap>
      <PhotoSlider images={['1.jpg', '2.jfif', 'img.jfif']} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset {...register('radio', { required: true })}>
          {['red', 'green', 'blue'].map((value) => (
            <ColorRadio key={value} color={value} value={value} selectedValue={watch('radio')} />
          ))}
        </Fieldset>
        <Fieldset column {...register('option', { required: true })}>
          {['red', 'green', 'blue'].map((value) => (
            <OptionRadio key={value} value={value} selectedValue={watch('option')}>
              <h1>{value}</h1>
            </OptionRadio>
          ))}
        </Fieldset>
        <Button type="submit">SUBMIT</Button>
      </Form>
      <Column>
        <Text type="title">Buy iPhone 12</Text>
        <Text type="header">Storage. How much space do you need?</Text>
        <Text type="param">
          256<small>GB2</small>
        </Text>
        <Text type="info">Dynamic Island A new way to interact with iPhone</Text>
        <Text>
          The display has rounded corners that follow a beautiful curved design, and these corners
          are within a standard rectangle. When measured as a standard rectangular shape, the screen
          is 5.42 inches (iPhone 13 mini), 6.06 inches (iPhone 13, iPhone 14), 6.12 inches (iPhone
          14 Pro), 6.68 inches (iPhone 14 Plus), or 6.69 inches (iPhone 14 Pro Max) diagonally.
          Actual viewable area is less.
        </Text>
      </Column>
    </PageWrap>
  );
};
