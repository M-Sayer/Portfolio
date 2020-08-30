import React, { useState } from 'react'
import './Main.css'

import Hello from './Hello/Hello';

const Main = () => {

  return (
    <div className='main'>
      <div className='greeting'>
        <Hello />
        <div className='typewriter-container'>
          <div className='typewriter-name'>
            i'm muhajir,
          </div>
          <div className='typewriter-text'>
          a full stack software developer.
          </div>
        </div>
      </div> 
      <div className='bio-short'>
        <p>
       i build things (mostly on the internet) and solve problems (mostly in real life). usually i'm training martial arts, rock climbing, or eating copious amounts of ice cream. but i'm always learning something new. 
       </p>
     </div>
    </div>
  );
}

export default Main