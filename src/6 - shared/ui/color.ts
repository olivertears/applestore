import styled from 'styled-components';

export const Color = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? color : '#868686')};
  font-size: inherit;
  font-weight: inherit;
`;
