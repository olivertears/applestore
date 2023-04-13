import styled from 'styled-components';

export const Iframe = styled.iframe<{ width?: string; height?: string }>`
  border-radius: 10px;
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
`;
