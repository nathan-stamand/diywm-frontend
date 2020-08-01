import React from "react";
import { Redirect } from "react-router-dom";

const ProjectShow = (props) => {
  const id = props.location.pathname.split('/').slice(1)
  const project = props.projects.find(proj => proj.id === id[0])
  if (project) {
    return (
      <div id="project-display">
        <h1>{project.attributes.name}</h1>
        <h3>Blog</h3>
          <p>{project.attributes.blog}</p>
        <h3>Materials</h3>
          <p>{project.attributes.materials}</p>
        <h3>Time Required</h3>
          <p>{project.attributes.total_time} minute(s)</p>
      </div>
    )
  }
  else {
    return <Redirect to="/"></Redirect>
  }
}

export default ProjectShow;