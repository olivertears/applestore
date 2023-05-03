import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { CONFIGURATION_NAMES } from '@entities/product/constants';
import { Column, Fieldset, OptionRadio, Row, Text } from '@shared/ui';
import { ConfigurationSelectorProps } from './configuration-selector.types';
import { StoreProductFormData } from '@widgets/forms/store-product-form/store-product-form.types';

export const ConfigurationSelector: FC<ConfigurationSelectorProps> = ({ configuration }) => {
  const { register, watch } = useFormContext<StoreProductFormData>();

  const calcPrice = (value: string, extraPrice: number) => {
    const price =
      extraPrice -
      (configuration.values.find(
        ({ value }) => value === watch(`configurations.${configuration.name}`)
      )?.extraPrice || 0);
    return price > 0 ? '+ $' + price : price === 0 ? '' : '- $' + -price;
  };

  return (
    <Column>
      <Text type="header">{CONFIGURATION_NAMES[configuration.name]}</Text>
      <Fieldset column {...register(`configurations.${configuration.name}`, { required: true })}>
        {configuration.values.map(({ value, extraPrice }) => (
          <OptionRadio
            key={value}
            value={value}
            selectedValue={watch(`configurations.${configuration.name}`) || ''}
          >
            <Row justifyContent="space-between">
              <Text type="param" width="auto">
                {value}
              </Text>
              <Text type="info" width="auto">
                {calcPrice(value, extraPrice)}
              </Text>
            </Row>
          </OptionRadio>
        ))}
      </Fieldset>
    </Column>
  );
};
