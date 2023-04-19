import { ChangeEventHandler, FC, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { RouteNames } from '../../../../router';
import { toUrlCase } from '../../../../../../utils';
import { ProductTypeEnum } from '../../../../../../interfaces';
import { Column, Link, Search } from '../../../../../ui';
import { productService } from '../../../../../../services/product';

export const StoreSearch: FC = () => {
  const [products, setProducts] = useState<{ type: ProductTypeEnum; name: string }[]>([]);
  const [search, setSearch] = useState('');

  const debounceSearch = useCallback(
    debounce((search: string) => {
      productService.getProductsByName(search).then((items) => setProducts(items));
    }, 800),
    []
  );

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const search = event.target.value;
    setSearch(search);
    search ? debounceSearch(search) : debounceSearch.cancel();
  };

  return (
    <Column width="300px">
      <Search theme="dark" value={search} onChange={onSearchChange} />
      <Column gap="3px">
        {products.map(({ name, type }) => (
          <Link
            key={name}
            to={toUrlCase(
              RouteNames.STORE_UNIT_PRODUCT.replace(':type', type).replace(':product', name)
            )}
          >
            {name}
          </Link>
        ))}
      </Column>
    </Column>
  );
};
