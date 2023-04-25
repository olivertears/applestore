import { FC, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { PARAM_NAMES } from '@entities/product/constants';
import { ProductParamEnum, ProductTypeEnum } from '@entities/product/types';
import { useFieldArr } from '@shared/hooks';
import { Button, Input, Select, Text } from '@shared/ui';
import { AddIcon } from '@shared/icons';

import { Param, ProductFormData } from '@widgets/forms/product-form/product-form.types';
import { InformationTabProps } from './Information-tab.types';
import { ParamField } from './param-field';
import { Video } from './video';

export const InformationTab: FC<InformationTabProps> = ({ onNextButtonClick }) => {
  const {
    control,
    register,
    watch,
    setValue,
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
        value={watch('type')}
        required
        onSelect={(value) => setValue('type', value as ProductTypeEnum)}
      >
        {Object.keys(ProductTypeEnum).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
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

      <Video />

      <Text type="param" textAlign="center">
        Параметры
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
