import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ColorInput, Input, Row } from '../../../../../../../ui';
import { DeleteIcon } from '../../../../../../../ui/icons';
import { ProductFormData } from '../../../product-form.types';
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
          required: 'Это поле обязательно'
        })}
      />
      {watch('colors').length !== 1 && (
        <DeleteIcon marginTop="10px" onClick={() => remove(index)} />
      )}
    </Row>
  );
};
