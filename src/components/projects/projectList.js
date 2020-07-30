import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  const renderProjects = projects.map((project, index) => {
    return <li key={project.attributes.key} ><Link to={`/projects/${project.id}`}>{projects[index].attributes.name}</Link></li>
  })

  return (
    <div id="project-container">
      {renderProjects}
    </div>
  )
}

export default ProjectList;