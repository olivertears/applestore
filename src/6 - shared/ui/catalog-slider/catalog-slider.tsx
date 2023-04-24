import { FC, PropsWithChildren } from 'react';
import * as S from './catalog-slider.styles';
import { CatalogSliderProps } from './catalog-slider.types';

export const CatalogSlider: FC<PropsWithChildren<CatalogSliderProps>> = ({
  marginBottom,
  children
}) => {
  return (
    <S.Slider marginBottom={marginBottom}>
      <S.Empty />
      {children}
    </S.Slider>
  );
};
