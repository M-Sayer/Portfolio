import styled, { keyframes } from 'styled-components';

const rotateWords = keyframes`
  8% { opacity: 1; height: 80px; }
  19% { opacity: 1; height: 80px; }
  25% { opacity: 0; height: 80px; }
  100% { opacity: 0; }
`

export const StyledHello = styled.div`
padding: 25px 0 75px 0;
text-align: center;
font-size: 60px;

div {
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  overflow: hidden;

  animation: ${rotateWords} 9s linear infinite 0s;

  :nth-child(2) {
    animation-delay: 3s;
  }

  :nth-child(3) {
    animation-delay: 6s;
  }
}
`
