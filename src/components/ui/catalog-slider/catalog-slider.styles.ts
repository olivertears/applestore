import styled from 'styled-components';

export const Slider = styled.div`
  width: 100vw;
  display: flex;
  gap: 20px;
  padding: 10px 30px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Empty = styled.div`
  min-width: calc(80% - 950px);
`;
