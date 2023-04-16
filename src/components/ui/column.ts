import styled from 'styled-components';

interface ColumnProps {
  alignItems?: 'center' | 'start' | 'end';
  justifyContent?: 'center' | 'start' | 'end';
  gap?: string;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : '15px')};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  min-width: 100%;
`;
