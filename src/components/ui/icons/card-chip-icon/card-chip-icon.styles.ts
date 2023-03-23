import styled from 'styled-components';

export const Svg = styled.svg<{ isActive?: boolean }>`
  background-color: #ffcc00;
  border-radius: ${({ isActive }) => (isActive ? `4px` : '2px')};
  height: ${({ isActive }) => (isActive ? `30px` : '15px')};
  width: ${({ isActive }) => (isActive ? `40px` : '20px')};
  position: absolute;
  top: ${({ isActive }) => (isActive ? `20px` : '10px')};
  left: ${({ isActive }) => (isActive ? `20px` : '10px')};
  transition: 0.5s ease-in-out all;
`;
