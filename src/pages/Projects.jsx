import React from 'react'
import ProjectItem from '../components/ProjectItem.jsx'
import {projectsArray} from '../projectsArray.js'

function Projects()
{
  return (
    <div className="projects">
      <h1> Open projects to see GitHub code and Live Demo</h1>
      <div className="projectList">
        {projectsArray.map( (project, idx) =>
          {
            return <ProjectItem id={idx} name={project.name} image={project.image}/>
          })}
      </div>
    </div>
  )
}

export default Projects;