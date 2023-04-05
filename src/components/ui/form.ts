import styled from 'styled-components';

export const Form = styled.form<{ minWidth?: string; maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '200px')};
  align-items: center;
`;
