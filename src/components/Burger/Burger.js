import React from 'react';
import { bool, func } from 'prop-types';

import { StyledBurger } from './Burger.styled';

const Burger = (props) => {
  return (
    <StyledBurger onClick={() => props.toggleOpen()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
};

Burger.propTypes = {
  toggleOpen: func.isRequired,
};

export default Burger;