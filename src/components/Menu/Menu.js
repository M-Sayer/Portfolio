import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = () => {

  return (
    <StyledMenu>
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

export default Menu;