import { FC, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { useFieldArr } from '../../../../../../../hooks';
import { Button, Input, Select, Text } from '../../../../../../ui';
import { AddIcon } from '../../../../../../ui/icons';
import { ProductParamEnum, ProductTypeEnum } from '../../../../../../../interfaces';
import { PARAM_NAMES } from '../../../../../../../constants';

import { Param, ProductFormData } from '../../product-form.types';
import { ParamField } from './param-field';
import { InformationTabProps } from './Information-tab.types';

export const InformationTab: FC<InformationTabProps> = ({ onNextButtonClick }) => {
  const {
    control,
    register,
    watch,
    formState: { errors }
  } = useFormContext<ProductFormData>();

  const [params, appendParam, removeParam] = useFieldArr(control, 'params');

  const watchedParams = watch(`params`);
  const controlledParams = params.map((param, index) => ({
    ...param,
    ...watchedParams?.[index]
  }));

  const availableParams = useMemo(
    (): ProductParamEnum[] =>
      (Object.keys(PARAM_NAMES) as ProductParamEnum[]).filter(
        (key) => !controlledParams.some(({ name }) => name === key)
      ),
    [controlledParams]
  );

  const NEW_PARAM: Param = { name: availableParams[0], value: '' };

  return (
    <>
      <Select
        label="Тип"
        {...register('type', {
          required: 'Это поле обязательно'
        })}
      >
        {Object.keys(ProductTypeEnum).map((key) => (
          <option key={key}>{key}</option>
        ))}
      </Select>
      <Input
        label="Название"
        value={watch('name')}
        error={errors.name?.message}
        {...register('name', {
          required: 'Это поле обязательно'
        })}
      />
      <Input
        type="price"
        label="Цена"
        value={watch('price')}
        error={errors.price?.message}
        {...register('price', {
          required: 'Это поле обязательно'
        })}
      />

      <Text type="param" textAlign="center">
        Params
      </Text>
      {params.map((param, index) => (
        <ParamField
          key={param.id}
          remove={removeParam}
          index={index}
          availableParams={availableParams}
        />
      ))}
      {!!availableParams.length && <AddIcon onClick={() => appendParam(NEW_PARAM)} />}
      <Button type="button" onClick={() => onNextButtonClick()}>
        ДАЛЕЕ
      </Button>
    </>
  );
};
