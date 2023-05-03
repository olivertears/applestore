import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Form, Modal } from '@shared/ui';
import { useFieldArr, useModal } from '@shared/hooks';
import { CartItem } from '@entities/cart/components';
import { CartProductFormProps } from '@widgets/forms/cart-product-form/cart-product-form.types';
import { CartFormFooter } from '@widgets/forms/cart-product-form/cart-form-footer';
import { cartService } from '@entities/cart/service';
import { OrderForm } from '@widgets/forms/order-form';

export const CartProductForm: FC<CartProductFormProps> = ({ cartProducts }) => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const methods = useForm<{ finalPrice: number; products: { amount: number }[] }>({
    defaultValues: { products: cartProducts.map(() => ({ amount: 1 })) }
  });

  const { control, watch, getValues } = methods;

  const [products, appendProduct, removeProduct] = useFieldArr<{
    finalPrice: number;
    products: { amount: number }[];
  }>(control, 'products');

  return (
    <FormProvider {...methods}>
      <Form minWidth="100%">
        {cartProducts.map((cart, index) => (
          <CartItem
            key={cart.id}
            cartItem={cart}
            index={index}
            remove={() => removeProduct(index)}
          />
        ))}
        <CartFormFooter
          showModal={showModal}
          products={cartService.cart$.map((product, index) => ({
            amount: watch(`products.${index}.amount`),
            product
          }))}
        />
      </Form>

      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <OrderForm
          finalPrice={getValues('finalPrice')}
          products={cartService.cart$.map((product, index) => ({
            amount: watch(`products.${index}.amount`),
            product
          }))}
        />
      </Modal>
    </FormProvider>
  );
};
