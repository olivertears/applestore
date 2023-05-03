import { FC, useEffect, useState } from 'react';
import { favoriteService } from '@entities/favorite/service';
import { Loader, PageWrap, Grid, Text } from '@shared/ui';
import { FavoriteItem } from '@entities/favorite/components';
import { observer } from 'mobx-react-lite';

const Favorites: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    favoriteService.getFavorites().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" margin="0 0 20px" textAlign="center">
        Избранные
      </Text>
      <Grid gridTemplateColumns="1fr 1fr 1fr">
        {favoriteService.favorites$.map((favorite) => (
          <FavoriteItem key={favorite.id} favorite={favorite} />
        ))}
      </Grid>
    </PageWrap>
  );
});

export default Favorites;
