import React from 'react';
import { useParams } from 'react-router-dom';

import projects from '../utils/projects';
import './Project.css';

const Project = () => {

  let { id } = useParams();

  function generateProject() {
    return (
      <div className='projectContainer'>
        <img src={projects[id].image} alt={projects[id].title} />
        <h2>{projects[id].title}</h2>
        <section>{projects[id].readMore}</section>
      </div>
    )
  }
  return generateProject()
}

export default Project;