import styled from 'styled-components'

export const ModalStyled = styled.div`
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  span {
    position: fixed;
    top: 40%;
    right: 5%;
  }

  section {
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding-bottom: 20px;
    border-radius: 3px;
  }

`