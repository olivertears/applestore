import styled from 'styled-components';

export const Button = styled.button<{ width?: string }>`
  background: #0071e3;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 5px;
  color: #fff;
  width: ${({ width }) => (width ? width : '300px')};
  max-width: 100%;
  min-width: 150px;
  position: relative;
  min-height: 36px;
  max-height: 39.2px;

  :hover {
    cursor: pointer;
    background: #0080e3;
    box-shadow: inset 0 0 20px #0071e3;
  }
`;
