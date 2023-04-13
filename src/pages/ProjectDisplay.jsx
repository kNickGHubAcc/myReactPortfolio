import React from 'react';
import {useParams} from 'react-router-dom'
import {projectsArray} from '../projectsArray.js'
import GithubIcon from '@mui/icons-material/GitHub'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';


function ProjectDisplay()
{
  const { id } = useParams();    //To useParams() είναι ένα hook που επιτρέπει το access στις παραμέτρους του τρέχοντος route
  const project = projectsArray[id];   //To project που έχει ως id, το id parameter του τρέχοντος route

  return <div className="project">
    <h1> {project.name} </h1>
    <img src={project.image} />
    <p> <b>Skills:</b> {project.skills} </p>
    <div>
      <a href={project.github} target="_blank"> <GithubIcon/> </a>
      <a href={project.link} target="_blank"> <OpenInBrowserIcon/> </a>
    </div>

  </div>
}

export default ProjectDisplay;