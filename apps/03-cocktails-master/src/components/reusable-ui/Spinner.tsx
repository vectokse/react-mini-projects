import styled, { keyframes } from "styled-components";


const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 4px solid rgba(255, 140, 0, 0.2);
  border-left-color: #ff8c00;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
