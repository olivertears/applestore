import styled from 'styled-components';

export const Slider = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 10px 30px 10px 10px;
  overflow-x: scroll;
  margin-bottom: 50px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Empty = styled.div`
  min-width: calc(80% - 940px);
`;
