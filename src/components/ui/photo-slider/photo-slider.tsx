import { FC, useState } from 'react';
import { ArrowIcon } from '../icons';
import * as S from './photo-slider.styles';
import { PhotoSliderProps } from './photo-slider.types';
import { Iframe } from '../iframe';
import { Skeleton } from '../skeleton';

export const PhotoSlider: FC<PhotoSliderProps> = ({ images, video }) => {
  const [index, setIndex] = useState(0);

  return (
    <S.Wrap>
      <ArrowIcon visible={index !== 0} onClick={() => setIndex(index - 1)} />
      <S.Slider index={index}>
        {!!video && (
          <Skeleton borderRadius="20px">
            <Iframe
              width="max(600px, min(60vw, 900px))"
              height="500px"
              src={`https://www.youtube.com/embed/${video}?controls=0`}
            />
          </Skeleton>
        )}
        {images.map((src) => (
          <S.Image key={src} src={src}></S.Image>
        ))}
      </S.Slider>
      <ArrowIcon
        position="right"
        visible={index < images.length + Number(!!video) - 1}
        onClick={() => setIndex(index + 1)}
      />
      <S.PointWrap>
        {(video ? [video, ...images] : images).map((src, id) => (
          <S.Point key={src} isActive={id === index} onClick={() => setIndex(id)}></S.Point>
        ))}
      </S.PointWrap>
    </S.Wrap>
  );
};
