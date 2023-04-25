import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Color, ColorRadio, Column, Fieldset, Text } from '@shared/ui';
import { StoreProductFormData } from '../../store-product-form.types';
import { ColorSelectorProps } from './color-selector.types';

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
