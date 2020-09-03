import React from 'react';
import { useHistory } from 'react-router-dom';
import './Portfolio.css'

import { PortfolioTileStyled } from './PortfolioTile.styled';
import { StyledLink, StyledButton } from '../StyledComponents';
import projects from '../../utils/projects';

const Portfolio = () => {
  const history = useHistory();

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
        <StyledButton primary id={project.title} onClick={() => handleClick(idx)}>
          read more
        </StyledButton>
      </PortfolioTileStyled>
    ))
  }

  return (
    <section className='portfolio'>
      <h2>my projects</h2>
      <div className='projects'>
        {renderProjects(projects)}
      </div>
    </section>
  )
}

export default Portfolio;