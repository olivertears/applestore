import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ProductFormData } from '@widgets/forms/product-form/product-form.types';
import { PARAM_NAMES } from '@entities/product/constants';
import { ProductParamEnum } from '@entities/product/types';
import { DeleteIcon } from '@shared/icons';
import { Row, Select, TextArea } from '@shared/ui';
import { ParamFieldProps } from './param-field.types';

export const ParamField: FC<ParamFieldProps> = ({ remove, index, availableParams }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<ProductFormData>();

  return (
    <Row alignItems="start">
      <Select
        label="Параметр"
        value={watch(`params.${index}.name`)}
        required
        onSelect={(value) => setValue(`params.${index}.name`, value as ProductParamEnum)}
      >
        {[watch(`params.${index}.name`), ...availableParams].map((key) => (
          <option key={key} value={key}>
            {PARAM_NAMES[key]}
          </option>
        ))}
      </Select>
      <TextArea
        label="Описание"
        value={watch(`params.${index}.value`)}
        error={errors.params?.[index]?.value?.message}
        {...register(`params.${index}.value`, {
          required: 'Это поле обязательно'
        })}
      />
      <DeleteIcon marginTop="10px" onClick={() => remove(index)} />
    </Row>
  );
};
