import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ColorInput, Input, Row } from '@shared/ui';
import { DeleteIcon } from '@shared/icons';
import { ProductFormData } from '@widgets/forms/product-form/product-form.types';
import { ColorFieldProps } from './color-field.types';

export const ColorField: FC<ColorFieldProps> = ({ remove, index }) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<ProductFormData>();

  return (
    <Row alignItems="start" width="300px">
      <ColorInput color={watch(`colors.${index}.value`)} {...register(`colors.${index}.value`)} />
      <Input
        label="Название"
        value={watch(`colors.${index}.name`)}
        error={errors.colors?.[index]?.name?.message}
        {...register(`colors.${index}.name`, {
          required: 'Это поле обязательно',
          validate: (value, { colors }) =>
            colors.filter(({ name }) => name === value).length !== 1
              ? 'Названия цветов не должны повторяться'
              : true
        })}
      />
      {watch('colors').length !== 1 && (
        <DeleteIcon marginTop="10px" onClick={() => remove(index)} />
      )}
    </Row>
  );
};
