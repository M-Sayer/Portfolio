import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useClickOutside } from './utils/useClickOutside'

import Header from './components/Header';
import Menu from './components/Menu/Menu';
import Burger from './components/Burger/Burger';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Project from './Routes/Project';

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
            <Menu toggleOpen={toggleOpen} open={open}/>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects/:id' component={Project}
            />
          </Switch>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
