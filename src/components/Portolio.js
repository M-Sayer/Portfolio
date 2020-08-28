import React, { useState } from 'react';

import { PortfolioTileStyled } from './PortfolioTile.styled';
import { StyledLink, StyledButton } from '../utils/StyledComponents';
import { Modal } from './Modal/Modal';

export const Portfolio = () => {

  const projects = [
    {
      title: 'CheffedIn',
      image: './images/cheffedin.png',
      link: 'https://cheffedin.vercel.app/',
      git: 'https://github.com/M-Sayer/cheffedIn-Client',
      description: 'social site',
      stack: 'React, Node.js, express.js, PostgreSQL (PERN)',
      readMore: 'extended description',
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

  const [modal, setModal] = useState({ open: false });

  function openModal(e) {
    //set state to project id to trigger corresponding modal
    e.preventDefault()
    setModal({
      open: e.target.id
    })
  } 

  function renderReadMore(content) {
    // render extended project description to pass as props to Modal component
    return (
      <section>
        {content}
      </section>
    )
  }

  function renderProjects(projects) {
    return projects.map((project, idx) => (
      <PortfolioTileStyled key={idx}>
        <img src={project.image} alt={project.title}/>
        <h3>
          {project.title}
        </h3>
        <p>
          {project.description}
        </p>
        <p>
          stack: {project.stack}
        </p>
        <StyledLink target='_blank' href={project.link} aria-label={project.title}>
          view project
        </StyledLink>
        <StyledLink target='_blank' href={project.git} aria-label='git-hub-link'>
          view code
        </StyledLink>
        <StyledButton id={project.title}
        //set state to project id to trigger modal with correct content
          onClick={(e) => openModal(e)}>
          read more
        </StyledButton>
        {modal.open === project.title && 
          // render modal with content from project
          <Modal content={renderReadMore(project.readMore)}
            closeModal={() => setModal({ open: false })}/>}
      </PortfolioTileStyled>
    ))
  }

  return (
    <section className='Portfolio'>
      <h2>my projects</h2>
      {renderProjects(projects)}
    </section>
  )
}