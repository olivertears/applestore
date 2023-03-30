import { FC, PropsWithChildren } from 'react';
import * as S from './catalog-slider.styles';

export const CatalogSlider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.Slider>
      <S.Empty />
      {children}
    </S.Slider>
  );
};
