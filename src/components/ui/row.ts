import styled from 'styled-components';

interface RowProps {
  alignItems?: 'center' | 'start' | 'left';
  justifyContent?: 'center' | 'start' | 'left';
  gap?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  max-width: 100%;
  position: relative;
  gap: ${({ gap }) => (gap ? gap : '15px')};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;
