import styled from 'styled-components';

interface FormProps {
  minWidth?: string;
  maxWidth?: string;
  gap?: string;
  alignItems?: 'center' | 'start' | 'left' | 'space-between';
}

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : '15px')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '200px')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
`;
