import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Fieldset,
  Form,
  OptionRadio,
  Select,
  Card,
  Text,
  Color,
  Loader,
  Column,
  Modal
} from '@shared/ui';
import { OrderFormProps } from '@widgets/forms/order-form/order-form.types';
import { AddOrderData, OrderPaymentOptionEnum } from '@entities/order/types';
import { observer } from 'mobx-react-lite';
import { addressService } from '@entities/address/service';
import { addressToStringAdapter } from '@entities/address/utils';
import { userService } from '@entities/user/service';
import * as S from './order-form.styles';
import { useModal } from '@shared/hooks';
import { cardService } from '@entities/card/service';
import { orderService } from '@entities/order/service';

export const OrderForm: FC<OrderFormProps> = observer(({ finalPrice, products }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isModalOpen, showModal, hideModal } = useModal();
  const [message, setMessage] = useState('');
  const { register, handleSubmit, watch, setValue } = useForm<AddOrderData>({
    defaultValues: {
      address: addressToStringAdapter(addressService.addresses$[0]),
      paymentOption: Object.keys(OrderPaymentOptionEnum)[0] as OrderPaymentOptionEnum,
      finalPrice,
      products
    }
  });

  const onSubmit = (data: AddOrderData) => {
    if (!addressService.addresses$.length) {
      setMessage(
        'Нужно выбрать адрес доставки. Если список адресов пуст - добавьте адрес у себя в профиле.'
      );
      showModal();
    } else if (data.paymentOption === OrderPaymentOptionEnum.CARD && !cardService.cards$.length) {
      setMessage(
        'Чтобы провести оплату картой - привяжите активную карту у себя в профиле. Или же выберите другой способ оплаты.'
      );
      showModal();
    } else {
      setIsLoading(true);
      orderService.addOrder(data).finally(() => setIsLoading(false));
    }
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <Column>
          <Text type="header" textAlign="center">
            Ошибка
          </Text>
          <Text type="param" textAlign="center" width="500px">
            {message}
          </Text>
        </Column>
      </Modal>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <Text type="title" textAlign="center">
          Оформление заказа
        </Text>
        <Text type="header" textAlign="center">
          Информация к заказу
        </Text>
        <Text type="param">
          Полное имя: {userService.user$?.firstName} {userService.user$?.lastName}
        </Text>
        <Text type="param">Мобильный телефон: {userService.user$?.phoneNumber}</Text>
        <Text type="param">Почта: {userService.user$?.email}</Text>
        <Select
          label="Адресс"
          required
          value={watch(`address`)}
          onSelect={(value) => setValue(`address`, value)}
        >
          {addressService.addresses$.map((address) => (
            <option key={address.id} value={addressToStringAdapter(address)}>
              {addressToStringAdapter(address)}
            </option>
          ))}
        </Select>
        <Text type="param" textAlign="center">
          Способ оплаты
        </Text>
        {watch('paymentOption') === OrderPaymentOptionEnum.CARD && (
          <Text type="info" textAlign="center">
            <Color color="darkred">Оплата проведется с карты, выбранной по умолчанию</Color>
          </Text>
        )}
        <Fieldset {...register('paymentOption', { required: true })}>
          {Object.values(OrderPaymentOptionEnum).map((option) => (
            <OptionRadio key={option} value={option} selectedValue={watch('paymentOption')}>
              <Text type="param" textAlign="center">
                {option}
              </Text>
            </OptionRadio>
          ))}
        </Fieldset>
        <Text type="header" textAlign="center">
          Детали заказа
        </Text>
        {products.map(({ product, amount }) => (
          <Card key={product.id} padding="0" color="#fff">
            <S.OrderProduct>
              <S.Image preview={product.preview} />
              <Column>
                <Text type="header" textAlign="center">
                  {product.name} ({product.color})
                </Text>
                <Text type="param" textAlign="center">
                  {amount} ✕ ${product.price?.toFixed(2)}
                </Text>
                <Text type="param" textAlign="right">
                  Итого: ${(amount * (product?.price || 0))?.toFixed(2)}
                </Text>
              </Column>
            </S.OrderProduct>
          </Card>
        ))}
        <Text type="param" textAlign="right">
          Общая сумма заказа: ${finalPrice.toFixed(2)}
        </Text>
        <Button type="submit">ПОДТВЕРДИТЬ</Button>
      </Form>
    </>
  );
});
