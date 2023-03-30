import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 5px 2px #dadada;
  transition: 300ms all;

  :hover {
    box-shadow: 0 0 5px 3px #dadada;
    transform: scale(103%);
  }
`;
