import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import Menu from './components/Menu/Menu';
import Burger from './components/Burger/Burger';

function App() {

  const [open, setOpen] = useState(false)

  function toggleOpen() {
    return setOpen(!open)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header />
          <div>
            <Burger toggleOpen={toggleOpen}/>
            {open && <Menu />}
          </div>
          <Main />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
