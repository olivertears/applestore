import { FC } from 'react';
import { addressToStringAdapter } from '../../utils';
import * as S from './address-item.styles';
import { AddressItemProps } from './address-item.types';

export const AddressItem: FC<AddressItemProps> = ({ address, onClick }) => {
  return <S.AddressItem onClick={onClick}>{addressToStringAdapter(address)}</S.AddressItem>;
};
