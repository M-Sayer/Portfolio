import React from 'react';
import { bool, func } from 'prop-types';

import { StyledBurger } from './Burger.styled';

const Burger = (props) => {
  return (
    <StyledBurger open={props.open} onClick={() => props.toggleOpen()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
};

Burger.propTypes = {
  toggleOpen: func.isRequired,
  open: bool.isRequired,
};

export default Burger;