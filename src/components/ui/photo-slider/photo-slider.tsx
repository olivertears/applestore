import { FC, useState } from 'react';
import { ArrowIcon } from '../icons';
import * as S from './photo-slider.styles';
import { PhotoSliderProps } from './photo-slider.types';

export const PhotoSlider: FC<PhotoSliderProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <S.Wrap>
      <ArrowIcon visible={index !== 0} onClick={() => setIndex(index - 1)} />
      <S.Slider index={index}>
        {images.map((src) => (
          <S.Image key={src} src={src}></S.Image>
        ))}
      </S.Slider>
      <ArrowIcon
        position="right"
        visible={index < images.length - 1}
        onClick={() => setIndex(index + 1)}
      />
      <S.PointWrap>
        {images.map((src, id) => (
          <S.Point key={src} isActive={id === index} onClick={() => setIndex(id)}></S.Point>
        ))}
      </S.PointWrap>
    </S.Wrap>
  );
};
