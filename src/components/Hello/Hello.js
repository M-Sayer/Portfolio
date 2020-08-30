import React from 'react';

import { StyledHello } from './Hello.styled';
import greetings from '../../utils/greetings';

const Hello = (props) => {

  
  function renderGreetings() {
    return greetings.map(greeting => (
      <div>{greeting}</div>
    ))
  }

  return (
    <StyledHello>
     {renderGreetings()}
    </StyledHello>
  )
}

export default Hello
