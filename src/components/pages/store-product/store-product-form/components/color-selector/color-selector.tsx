import { FC } from 'react';
import { ColorSelectorProps } from './color-selector.types';
import { Color, ColorRadio, Column, Fieldset, Text } from '../../../../../ui';
import { useFormContext } from 'react-hook-form';
import { StoreProductFormData } from '../../../store-product.types';

export const ColorSelector: FC<ColorSelectorProps> = ({ colors }) => {
  const { register, watch } = useFormContext<StoreProductFormData>();

  return (
    <Column>
      <Text type="header">
        Color. <Color>Pick your favorite.</Color>
      </Text>
      <Text type="param">Color - {watch('color')}</Text>
      <Fieldset {...register('color', { required: true })}>
        {colors.map(({ name, value }) => (
          <ColorRadio key={name} color={value} value={name} selectedValue={watch('color')} />
        ))}
      </Fieldset>
    </Column>
  );
};
