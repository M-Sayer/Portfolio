import React from 'react'
import { ModalStyled } from './Modal.styled'

export const Modal = (props) => {

  return(
    <ModalStyled>
      <span onClick={() => props.closeModal()}
      class='material-icons md-light'>
        highlight_off
      </span>
      {props.content}
    </ModalStyled>
  )
}