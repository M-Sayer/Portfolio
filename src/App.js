import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import Header from './components/Header';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Project from './Routes/Project';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <div className="App">
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
