import { ChangeEventHandler, FC, useState } from 'react';
import { ProductPhotoSliderProps } from './product-photo-slider.types';
import { Card, CatalogSlider, Column, Loader, Skeleton, Text } from '../../../../../../../ui';
import * as S from './product-photo-slider.styles';
import { AddPhotoIcon, CloseIcon } from '../../../../../../../ui/icons';
import { photoService } from '../../../../../../../../services/photo';
import { toUrlCase } from '../../../../../../../../utils';

export const ProductPhotoSlider: FC<ProductPhotoSliderProps> = ({ color, type, name }) => {
  const [isLoading, setIsLoading] = useState(false);

  const addPhoto: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      setIsLoading(true);
      const arrayBuffer = await event.target.files[0].arrayBuffer();
      const photo = new File(
        [new Uint8Array(arrayBuffer)],
        toUrlCase(type + '/' + name + '/' + color.name),
        { type: event.target.files[0].type }
      );

      // id + color + file
      photoService.addPhoto(photo).finally(() => setIsLoading(false));
    }
  };

  const deletePhoto = (photo: string) => {
    setIsLoading(true);
    photoService
      .deletePhoto(toUrlCase(type + '/' + name + '/' + color.name) + '/' + photo)
      .finally(() => setIsLoading(false));
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
                <S.ProductPhotoCard photo={photo} />
                <CloseIcon onClick={() => deletePhoto(photo)} />
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
