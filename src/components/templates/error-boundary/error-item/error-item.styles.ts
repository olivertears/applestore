import styled from 'styled-components';

export const Wrap = styled.div`
  width: 300px;
  border-radius: 5px;
  padding: 20px;
  outline: 1px solid #dadada;
  position: relative;
  text-align: center;

  :hover {
    outline: 1px solid #1d1d1f;
  }
`;

export const CloseIconSvg = styled.svg`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
`;
