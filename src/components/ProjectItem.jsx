import React from 'react'
import { useNavigate } from 'react-router-dom'


function ProjectItem( {name, image, id} )
{
  const navigate = useNavigate();   //To useNavigate() είναι hook το οποίο μας επιτρέπει το redirect σε άλλα pages

  return (
    <div class="projectItem" onClick={() => {navigate("/project/" + id)}}>
      <div style={{backgroundImage: `url(${image})`}} className="bgImage"></div>
      <h1> {name} </h1>
    </div>
  )
}

export default ProjectItem;