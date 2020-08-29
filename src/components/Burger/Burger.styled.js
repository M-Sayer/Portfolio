import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #FFF;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :nth-child(2) {
      opacity: ${({ open }) => open ? '1' : '1'};
      transform: ${({ open }) => open ? 'translateX(10px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
  }
`;