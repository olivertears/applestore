import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { useFieldArr } from '../../../../../../../../hooks';
import { CONFIGURATION_NAMES } from '../../../../../../../../constants';
import { Column, Row, Select } from '../../../../../../../ui';
import { AddIcon } from '../../../../../../../ui/icons';

import { ConfigurationValue, ProductFormData } from '../../../product-form.types';
import { ConfigurationFieldProps } from './configuration-field.types';
import { ConfigurationValueField } from './configuration-value-field';

export const ConfigurationField: FC<ConfigurationFieldProps> = ({
  remove,
  index,
  availableConfigurations
}) => {
  const { control, watch, register } = useFormContext<ProductFormData>();

  const [configurationValues, appendConfigurationValue, removeConfigurationValue] = useFieldArr(
    control,
    `configurations.${index}.values`
  );

  return (
    <Row>
      <Select label="Конфигурация" {...register(`configurations.${index}.name`)}>
        {[watch(`configurations.${index}.name`), ...availableConfigurations].map((key) => (
          <option key={key} value={key}>
            {CONFIGURATION_NAMES[key]}
          </option>
        ))}
      </Select>
      <Column>
        {configurationValues.map((configurationValue, idx) => (
          <ConfigurationValueField
            key={configurationValue.id}
            configurationIndex={index}
            index={idx}
            remove={removeConfigurationValue}
            removeConfiguration={remove}
          />
        ))}
        <AddIcon onClick={() => appendConfigurationValue({} as ConfigurationValue)} />
      </Column>
    </Row>
  );
};
