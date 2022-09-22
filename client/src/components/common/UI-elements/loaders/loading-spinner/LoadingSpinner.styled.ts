import styled, { keyframes } from "styled-components";

const ldsCircle = keyframes`
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const LoadingSpinnerBox = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  margin: 6px;
  border-radius: 50%;
  background: rgba(122, 116, 108, 0.6);
  animation: ${ldsCircle} 6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;
