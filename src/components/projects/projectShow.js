import React from "react";

const ProjectShow = projects => {
  const id = projects.match.params.projectId
  const project = projects.projects.find(proj => proj.id === id)
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
  else if (id === 'new') {
    return <h1>New Project</h1>
  }
  else {
    return <h1>Project Not Found</h1>
  }
}

export default ProjectShow;