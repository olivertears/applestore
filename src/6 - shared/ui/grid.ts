import styled from 'styled-components';

interface GridProps {
  alignItems?: 'center' | 'start' | 'end';
  justifyContent?: 'center' | 'start' | 'end';
  gap?: string;
  width?: string;
  padding?: string;
  gridTemplateColumns?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : '20px')};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => (width ? width : '100%')};
  max-width: 1020px;
  padding: ${({ padding }) => padding};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
`;
