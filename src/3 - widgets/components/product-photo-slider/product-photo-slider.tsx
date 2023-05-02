import { ChangeEventHandler, FC, useState } from 'react';
import { AddPhotoIcon, CloseIcon } from '@shared/icons';
import { Card, CatalogSlider, Column, Loader, Skeleton, Text } from '@shared/ui';
import { photoService } from './service';
import * as S from './product-photo-slider.styles';
import { ProductPhotoSliderProps } from './product-photo-slider.types';

export const ProductPhotoSlider: FC<ProductPhotoSliderProps> = ({ color, productId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const addPhoto: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      setIsLoading(true);
      photoService
        .addPhoto(event.target.files[0], productId, color.name)
        .finally(() => setIsLoading(false));
    }
  };

  const deletePhoto = (photo: string) => {
    photoService.deletePhoto(photo, productId);
  };

  return (
    <Column gap="5px" width="605px">
      <Text type="param" padding="0 0 0 30px">
        {color.name}
      </Text>
      <S.ProductPhotoWrap>
        <CatalogSlider>
          {color.photos.map((photo) => (
            <Card key={photo} padding="0" borderRadius="10px">
              <Skeleton>
                <S.ProductPhotoCard photo={productId + '/' + photo}>
                  <CloseIcon width="15px" onClick={() => deletePhoto(photo)} />
                </S.ProductPhotoCard>
              </Skeleton>
            </Card>
          ))}
          <Card padding="0" borderRadius="10px">
            <S.ProductPhotoCard>
              {isLoading && <Loader />}
              <AddPhotoIcon />
              <S.ProductPhotoLabel>
                <S.ProductPhotoInput type="file" onChange={addPhoto} />
              </S.ProductPhotoLabel>
            </S.ProductPhotoCard>
          </Card>
        </CatalogSlider>
      </S.ProductPhotoWrap>
    </Column>
  );
};
