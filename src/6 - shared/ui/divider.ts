import styled from 'styled-components';

export const Divider = styled.div<{ margin?: string; vertical?: boolean }>`
  max-width: 1000px;
  width: ${({ vertical }) => (vertical ? '1px' : '100%')};
  height: ${({ vertical }) => (vertical ? 'auto' : '0.5px')};
  border-radius: 5px;
  background-color: #dadada;
  margin: ${({ margin }) => (margin ? margin : '50px')};
`;
