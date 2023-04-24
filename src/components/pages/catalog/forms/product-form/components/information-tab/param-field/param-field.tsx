import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { ProductParamEnum } from '../../../../../../../../interfaces';
import { PARAM_NAMES } from '../../../../../../../../6 - shared/constants';
import { Row, Select, TextArea } from '@shared/ui';
import { DeleteIcon } from '@shared/icons';
import { ProductFormData } from '../../../product-form.types';
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
