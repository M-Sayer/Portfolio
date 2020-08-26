import React from 'react';
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Main />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
