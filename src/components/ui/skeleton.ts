import styled, { keyframes } from 'styled-components';

const SkeletonLoading = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const Skeleton = styled.div`
  background: #fbfbfd;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${SkeletonLoading} linear infinite;
`;
