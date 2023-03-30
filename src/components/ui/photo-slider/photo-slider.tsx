import { FC, useState } from 'react';
import * as S from './photo-slider.styles';
import { PhotoSliderProps } from './photo-slider.types';
import { ArrowIcon } from '../icons';

export const PhotoSlider: FC<PhotoSliderProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <S.Wrap>
      <ArrowIcon left={20} visible={index !== 0} onClick={() => setIndex(index - 1)} />
      <S.Slider index={index}>
        {images.map((src) => (
          <S.Image key={src} src={src}></S.Image>
        ))}
      </S.Slider>
      <ArrowIcon
        right={20}
        rotate={180}
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
