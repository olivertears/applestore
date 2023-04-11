import styled from 'styled-components';

interface ColumnProps {
  alignItems?: 'center' | 'start' | 'left';
  justifyContent?: 'center' | 'start' | 'left';
  gap?: string;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : '15px')};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;
