import { FC } from 'react';
import * as S from './loader.styles';

export const Loader: FC = () => {
  return (
    <S.Wrap>
      <S.Loader className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </S.Loader>
    </S.Wrap>
  );
};
