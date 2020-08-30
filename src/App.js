import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useClickOutside } from './utils/useClickOutside'

import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu/Menu';
import Burger from './components/Burger/Burger';
import { Portfolio } from './components/Portfolio/Portfolio';
import Project from './components/Portfolio/Project';

function App() {

  // hamburger menu state
  const [open, setOpen] = useState(false);
  
  function toggleOpen() {
    return setOpen(!open);
  };

  // close menu if you click outside menu (desktop)
  const node = useRef();
  useClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <div className="App">
          <div ref={node}>
            <Burger open={open} toggleOpen={toggleOpen}/>
            <Menu open={open}/>
          </div>
          <Switch>
            <Route exact path='/' 
              render={props => 
                <div>
                  <Main />
                  <Portfolio />
                </div>
              }
            />
            <Route path='/projects/:id' component={Project}
            />
          </Switch>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
