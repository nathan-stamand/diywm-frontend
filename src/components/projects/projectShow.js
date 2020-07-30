import React from "react";

const ProjectShow = projects => {
  const id = projects.match.params.projectId
  const project = projects.projects.find(proj => proj.id === id)
  if (project) {
    return (
      <div id="project-display">
        <h1>{project.attributes.name}</h1>
      </div>
    )
  }
  else {
    return (
      <h1>No Project Found</h1>
    )
  }
}

export default ProjectShow;