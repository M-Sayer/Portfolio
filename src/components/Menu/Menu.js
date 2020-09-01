import React from 'react';
import { NavLink } from 'react-router-dom';
import { bool } from 'prop-types';

import { StyledMenu } from './Menu.styled';

const Menu = (props) => {

  return (
    <StyledMenu open={props.open}>
      <NavLink onClick={() => props.toggleOpen()} to='/' aria-label='home'>
        home
      </NavLink>
      <NavLink onClick={() => props.toggleOpen()} to='/about' aria-label='about'>
        about
      </NavLink>
      <NavLink onClick={() => props.toggleOpen()} to='/contact' aria-label='contact'>
        contact
      </NavLink>
    </StyledMenu>
  )
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;