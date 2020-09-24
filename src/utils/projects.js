import React from 'react';

const projects = [
  {
    title: 'CheffedIn',
    image: '/images/cheffedin.png',
    link: 'https://cheffedin.vercel.app/',
    git: 'https://github.com/M-Sayer/cheffedIn-Client',
    description: 'a social site for recipe sharing & management',
    stack: 'React, Node.js, express.js, PostgreSQL (PERN)',
    readMore: <>
      <p>i built cheffedIn as a project to share with my friends during covid-19, when we were all staying home and trying out lots of new recipes. i wanted to build something where users could share the recipes they've been making, as well as have a place to store those recipes. i figured not everyone would want to upload an image, so i incorporated Unsplash's 3rd party API into the form, so they could search for images. i also wanted users to be able to save other user's recipes to lists, and leave comments to incorporate a social component. in the future, i hope to incorporate live messaging, and more robust user profiles and dashboards.</p>
      
      <p>this project was a great way to reinforce working with React and state-management, as well as building a RESTful API. i really enjoyed creating authentication with json web tokens, and verifying user permissions on both the client and server side. i'm a very privacy-minded individual. i used the bcrypt library to encrypt user passwords, added an XSS library to handle cross site scripting, and worked with the Formik library for the first time, which was awesome. i started this project by creating the relational schema for a postgreSQL database, setting up the required primary/foreign keys, and a junction table for the many-to-many relationship between my lists and recipes tables. then i architected the REST API, creating a uniform interface, and set up automated endpoint testing, and documentation. Postman was a great tool to simulate client requests. after that, i jumped into React to build out my client side, and constructed out several services containing the requisite async calls to the API, and several contexts for state management. one feature that was fun to build, and required some refactoring as the project progressed, was the live search feature. i also used this project as an opportunity to learn React Hooks, and some other React features.</p>
      
      <p>i built this project primarily over two weeks, and then during a subsequent week, i polished up some features and added basic design. mostly with this project i wanted to practice more technical skills across the full stack, although i hope to go in and add more in depth CSS at some point.</p>
      
      <p>if you have any questions, feel free to reach out!</p>
    </>,
  },
  {
    title: 'JotDown',
    image: '/images/jotdown_sm.png',
    link: 'https://expo.io/@sayer/jotdown',
    git: 'https://github.com/M-Sayer/jotdown',
    description: 'a react native mobile app for notetaking. to view the project on your mobile phone, install the expo client app and then click theproject link',
    stack: 'React Native, Firebase',
    readMore: 
      <>
        <p>
          this is a personal project that i am actively building. to view the project on your mobile phone, install the <a href='https://expo.io/tools#client' target='_blank'>expo client app</a> and then click the <a href='https://expo.io/@sayer/jotdown' target='_blank'>project link</a>. initially, i began this project to learn react native for mobile devolopment, and to reinforce my previous learning of Google Firebase. i began with a simple notetaking app, building out CRUD functionality. then i implemented an iPhone notes style interface, where the user can simply tap anywhere on the note to begin editing. once a user begins editing, buttons to cancel or save render under the note. if a user cancels, the note will revert to its previous state. if the user saves, the new information will be stored in Firebase. Users can also currently swipe left on a note in the dashboard list view to render a delete button and delete a note. though it is quite simple now, my plan is to implement markdown style editing for more intuitive formatting while notetaking on mobile devices. Check back later to see how this project is coming along!
        </p>
      </>
  },
  {
    title: 'Bookmark App',
    image: '/images/bookmarkapp.png',
    link: 'https://m-sayer.github.io/bookmarkApp/',
    git: 'https://github.com/M-Sayer/bookmarkApp',
    description: 'an app to save bookmarks',
    stack: 'jQuery, JavaScript, HTML/CSS',
    readMore: 
      <>
        <p>this was a project i built while learning about jQuery and AJAX. it is a simple bookmark site, that uses a 3rd party API to store data and make basic CRUD (create, read, update, delete) operations. users can create a new bookmark, leave a description and rating, as well as sort the bookmarks by rating. implementing the sorting function was fun to do in jQuery, and i enjoyed learning about DOM manipulation, which is much more hands on in jQuery, as opposed to a JS library like React. as much as i love react, i do hope for a chance to work with jQuery again in the future!</p>
  
        <p>if you have any questions, feel free to reach out!</p>
      </>,
  },
];

export default projects;