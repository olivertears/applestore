import styled from 'styled-components';
import { TextProps } from './text.types';

export const Title = styled.div<Omit<TextProps, 'type'>>`
  font-size: 48px;
  font-weight: bold;
  color: #1d1d1f;
  max-width: 1040px;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
 }
`;

export const Header = styled.div<Omit<TextProps, 'type'>>`
  font-size: 24px;
  font-weight: bold;
  color: #1d1d1f;
  max-width: 1040px;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const Param = styled.div<Omit<TextProps, 'type'>>`
  font-size: 17px;
  font-weight: bold;
  color: #1d1d1f;
  max-width: 1040px;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const Info = styled.div<Omit<TextProps, 'type'>>`
  font-size: 14px;
  color: #868686;
  max-width: 1040px;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const Text = styled.div<Omit<TextProps, 'type'>>`
  font-size: 12px;
  color: #1d1d1f;
  max-width: 1040px;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;
