import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { PARAM_NAMES } from '../../../../../../../../constants';
import { Row, Select, TextArea } from '../../../../../../../ui';
import { DeleteIcon } from '../../../../../../../ui/icons';
import { ProductFormData } from '../../../product-form.types';
import { ParamFieldProps } from './param-field.types';

export const ParamField: FC<ParamFieldProps> = ({ remove, index, availableParams }) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<ProductFormData>();

  return (
    <Row alignItems="start">
      <Select label="Параметр" {...register(`params.${index}.name`)}>
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
