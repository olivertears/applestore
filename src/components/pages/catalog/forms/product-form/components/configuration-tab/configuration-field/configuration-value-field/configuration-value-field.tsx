import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input, Row } from '@shared/ui';
import { DeleteIcon } from '@shared/icons';
import { ProductFormData } from '../../../../product-form.types';
import { ConfigurationValueFieldProps } from './configuration-value-field.types';

export const ConfigurationValueField: FC<ConfigurationValueFieldProps> = ({
  configurationIndex,
  index,
  remove,
  removeConfiguration
}) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<ProductFormData>();

  return (
    <Row alignItems="start" width="380px">
      <Input
        label="Значение"
        value={watch(`configurations.${configurationIndex}.values.${index}.value`)}
        error={errors.configurations?.[configurationIndex]?.values?.[index]?.value?.message}
        {...register(`configurations.${configurationIndex}.values.${index}.value`, {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        type="price"
        label="Доплата"
        value={watch(`configurations.${configurationIndex}.values.${index}.extraPrice`)}
        error={errors.configurations?.[configurationIndex]?.values?.[index]?.extraPrice?.message}
        {...register(`configurations.${configurationIndex}.values.${index}.extraPrice`, {
          required: 'Это поле обязательно'
        })}
      />
      <DeleteIcon
        marginTop="10px"
        onClick={() =>
          watch(`configurations.${configurationIndex}.values`).length > 1
            ? remove(index)
            : removeConfiguration(configurationIndex)
        }
      />
    </Row>
  );
};
