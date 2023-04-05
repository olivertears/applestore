import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input, Row } from '../../../../../../../../ui';
import { DeleteIcon } from '../../../../../../../../ui/icons';
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
    <Row>
      <Input
        maxWidth="150px"
        label="Значение"
        value={watch(`configurations.${configurationIndex}.values.${index}.value`)}
        error={errors.configurations?.[configurationIndex]?.values?.[index]?.value?.message}
        {...register(`configurations.${configurationIndex}.values.${index}.value`, {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        maxWidth="150px"
        type="price"
        label="Доплата"
        value={watch(`configurations.${configurationIndex}.values.${index}.extraPrice`)}
        error={errors.configurations?.[configurationIndex]?.values?.[index]?.extraPrice?.message}
        {...register(`configurations.${configurationIndex}.values.${index}.extraPrice`, {
          required: 'Это поле обязательно'
        })}
      />
      <DeleteIcon
        width="50px"
        onClick={() =>
          watch(`configurations.${configurationIndex}.values`).length > 1
            ? remove(index)
            : removeConfiguration(configurationIndex)
        }
      />
    </Row>
  );
};
