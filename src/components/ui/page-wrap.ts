import styled from 'styled-components';

export const PageWrap = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => (padding ? padding : '30px 0 50px')};
  align-items: center;
`;
