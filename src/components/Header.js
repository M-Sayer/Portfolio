import React, {useState, useRef } from 'react';
import './Header.css';
import { SocialIcon } from 'react-social-icons';
import { Linkedin, GitHub } from 'react-feather';

import Menu from './Menu/Menu';
import Burger from './Burger/Burger';
import { useClickOutside } from '../utils/useClickOutside';

const Header = () => {

   // hamburger menu state
   const [open, setOpen] = useState(false);
  
   function toggleOpen() {
     return setOpen(!open);
   };
 
   // close menu if you click outside menu (desktop)
   const node = useRef();
   useClickOutside(node, () => setOpen(false));

  return (
   <header>
      <section>
        <Burger open={open} toggleOpen={toggleOpen}/>
        <Menu toggleOpen={toggleOpen} open={open}/>
      </section>
      <h3>muhajir</h3>
      <div className='socialIcons'>
        <a target='_blank' 
          href='https://www.linkedin.com/in/muhajir-sayer/' 
          className='socialIcon'
        >
          <Linkedin />
        </a>
        <a target='_blank'
          href='https://github.com/M-Sayer' 
          className='socialIcon'
        >
          <GitHub />
        </a>
      </div>
   </header>
  )
}

export default Header;