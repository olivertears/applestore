import styled from 'styled-components';

export const Fieldset = styled.fieldset<{ column?: boolean }>`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  gap: 15px;
  width: 100%;
  padding: 0;
`;
