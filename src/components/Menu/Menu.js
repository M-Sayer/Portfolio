import React from 'react';
import { bool } from 'prop-types';

import { StyledMenu } from './Menu.styled';

const Menu = (props) => {

  return (
    <StyledMenu open={props.open}>
      <a href='/' aria-label='home'>
        home
      </a>
      <a href='/' aria-label='about'>
        about
      </a>
      <a href='/' aria-label='contact'>
        contact
      </a>
    </StyledMenu>
  )
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;