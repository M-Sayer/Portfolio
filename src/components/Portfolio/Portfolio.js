import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Portfolio.css'

import { PortfolioTileStyled } from './PortfolioTile.styled';
import { StyledLink, StyledButton } from '../StyledComponents';
import { Modal } from '../Modal/Modal';
import projects from '../../utils/projects';

const Portfolio = () => {
  const history = useHistory();

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
        <p>{content}</p>
      </section>
    )
  }

  function handleClick(idx) {
    history.push(`/projects/${idx}`)
  }

  function renderProjects(projects) {
    return projects.map((project, idx) => (
      <PortfolioTileStyled key={idx}>
        <img src={project.image} alt={project.title}/>
        <h3>
          {project.title}
        </h3>
          {project.description}
        <p>
          stack: {project.stack}
        </p>
        <div className='project-links'>
          <StyledLink target='_blank' href={project.link} aria-label={project.title}>
            view project
          </StyledLink>
          <StyledLink target='_blank' href={project.git} aria-label='git-hub-link'>
            view code
          </StyledLink>
        </div>
        <StyledButton primary id={project.title}
        //set state to project id to trigger modal with correct content
          onClick={() => handleClick(idx)}>
          read more
        </StyledButton>
        {modal.open === project.title && 
          // render modal with content from project
          <Modal content={project.readMore}
            closeModal={() => setModal({ open: false })}/>}
      </PortfolioTileStyled>
    ))
  }

  return (
    <section className='portfolio'>
      <h2>my projects</h2>
      {renderProjects(projects)}
    </section>
  )
}

export default Portfolio;