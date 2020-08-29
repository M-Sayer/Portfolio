import React, { useState } from 'react'
import './Main.css'

const Main = () => {

  const [greeting, setGreeting] = useState('hello')

  const greetings = ['hello', 'bonjour', 'hola',];

  setInterval(() => {
    let random = Math.floor(Math.random() * greetings.length);
    setGreeting(greetings[random])
  }, 2000)

  return (
    <div className='intro'>
      <div className='hello-rotate'>
        <span>hello</span>
        <span>bonjour</span>
        <span>hola</span>
      </div>
      <div className='typewriter-name'>
        i'm muhajir,
      </div>
     <div className='typewriter-text'>
      a full stack software developer.
     </div>
      <p>
      i build web applications, utilizing my experience from digital marketing and working with e-commerce brands to craft creative software solutions and user experiences that are easy to use.
      </p>
    </div>
  );
}

export default Main