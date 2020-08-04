import React from "react";
import { withRouter } from "react-router-dom";

const ProjectShow = (props) => {
  const id = props.match.params.projectId;
  const project = props.projects.find(proj => proj.id === id)
  if (project) {
    return (
      <div id="project-display">
        <h1>{project.attributes.name}</h1>
        <h3>Blog</h3>
          <p>{project.attributes.blog}</p>
        <h3>Materials</h3>
          <p>{project.attributes.materials || 'None'}</p>
        <h3>Time Required</h3>
          <p>{project.attributes.total_time || '0'} minute(s)</p>
      </div>
    )
  }
  else {
    return <h3 className='no-project-found'>No Project Found</h3>
  }
}

export default withRouter(ProjectShow);