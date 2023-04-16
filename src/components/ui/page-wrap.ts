import styled from 'styled-components';

export const PageWrap = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  padding: 30px 0 50px;
  align-items: center;
  gap: ${({ gap }) => gap};
`;
