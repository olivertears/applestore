import { FC } from 'react';
import { Card, CatalogSlider, PageWrap, PhotoSlider, Title } from '../../ui';

export const Store: FC = () => {
  return (
    <PageWrap>
      <CatalogSlider>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Card key={item}>
            <Title>Title</Title>
            some text
          </Card>
        ))}
      </CatalogSlider>

      <PhotoSlider images={['1.jpg', '2.jfif', 'img.jfif']} />
    </PageWrap>
  );
};
