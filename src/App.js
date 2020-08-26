import React, { useState, useRef } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useClickOutside } from './utils/useClickOutside'

import Menu from './components/Menu/Menu';
import Burger from './components/Burger/Burger';

function App() {

  const [open, setOpen] = useState(false);

  function toggleOpen() {
    return setOpen(!open);
  };

  const node = useRef();
  useClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header />
          <div ref={node}>
            <Burger open={open} toggleOpen={toggleOpen}/>
            <Menu open={open}/>
          </div>
          <Main />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
