import { FC } from 'react';
import { CardChipIcon } from '../../../../ui/icons';
import {
  cardMonthPattern,
  cardNumberPattern,
  cardOwnerPattern,
  cardYearPattern
} from '../../utils';
import * as S from './card-item.styles';
import { CardItemProps } from './card-item.types';

export const CardItem: FC<CardItemProps> = ({ card, onClick, isActive }) => {
  return (
    <S.Card onClick={onClick} isActive={isActive}>
      <CardChipIcon isActive={isActive} />
      <S.Number isActive={isActive}>{cardNumberPattern(card.number)}</S.Number>
      <S.Owner isActive={isActive}>{cardOwnerPattern(card.owner)}</S.Owner>
      <S.ValidThru isActive={isActive}>VALID THRU</S.ValidThru>
      <S.Date isActive={isActive}>
        {cardMonthPattern(card.month)}/{cardYearPattern(card.year)}
      </S.Date>
    </S.Card>
  );
};
