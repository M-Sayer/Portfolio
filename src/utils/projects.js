const projects = [
  {
    title: 'CheffedIn',
    image: './images/cheffedin.png',
    link: 'https://cheffedin.vercel.app/',
    git: 'https://github.com/M-Sayer/cheffedIn-Client',
    description: 'a social site for recipe sharing & management',
    stack: 'React, Node.js, express.js, PostgreSQL (PERN)',
    readMore: (`i built cheffedIn as a project to share with my friends during covid-19, when we were all staying home and trying out lots of new recipes. i wanted to build something where users could share the recipes they've been making, as well as have a place to store those recipes. i figured not everyone would want to upload an image, so i incorporated Unsplash's 3rd party API into the form, so they could search for images. i also wanted users to be able to save other user's recipes to lists, and leave comments to incorporate a social component. In the future, I hope to incorporate live messaging, and more robust user profiles and dashboards.
    
    this project was a great way to reinforce working with React and state-management, as well as building a RESTful API. i really enjoyed creating authentication with json web tokens, and verifying user permissions on both the client and server side. i used the bcrypt library to encrypt user passwords, and added an XSS library to handle cross site scripting, and worked with the Formik library for the first time, which was awesome. i started this project by creating the relational schema for a postgreSQL database, setting up the required primary/foreign keys, and a junction table for the many-to-many relationship between my lists and recipes tables. then i architected the REST API, creating a uniform interface, and set up automated endpoint testing, and documentation. Postman was a great tool to simulate client requests. after that, i jumped into React to build out my client side, and constructed out several services containing the requisite async calls to the API, and several contexts for state management. one feature that was fun to build, and required some refactoring as the project progressed, was the live search feature. i also used this project as an opportunity to learn React Hooks, and some other React features.

    i built this project primarily over two weeks, spending a good amount each day, and then during a subsequent week, i polished up some features and added some basic design. mostly with this project i wanted to practice more technical skills across the full stack, although i hope to go in and add more in depth CSS at some point.

    if you have any questions, feel free to reach out! :)`)
  },
  {
    title: 'Bookmark App',
    image: './images/bookmarkapp.png',
    link: 'https://m-sayer.github.io/bookmarkApp/',
    git: 'https://github.com/M-Sayer/bookmarkApp',
    description: 'an app to save bookmarks',
    stack: 'jQuery, JavaScript, HTML/CSS',
    readMore: 'extended description',
  },
];

export default projects;