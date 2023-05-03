import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loader, PageWrap, Text } from '@shared/ui';
import { cartService } from '@entities/cart/service';
import { CartProductForm } from '@widgets/forms/cart-product-form';

const Cart: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cartService.getCartProducts().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" margin="0 0 20px" textAlign="center">
        Корзина
      </Text>
      {!!cartService.cart$.length && <CartProductForm cartProducts={cartService.cart$} />}
    </PageWrap>
  );
});

export default Cart;
