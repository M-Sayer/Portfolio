import React from 'react';
import { useParams } from 'react-router-dom';

import projects from '../../utils/projects';

const Project = () => {

  let { id } = useParams();

  function generateProject() {
    return (
      <div>
        {projects[id].title}
      </div>
    )
  }
  return generateProject()
}

export default Project;