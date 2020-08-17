import React from "react";
import { Link } from "react-router-dom";
import NewProject from "../projects/buttons/NewProject";
import DeleteProject from "../projects/buttons/DeleteProject";
import cuid from "cuid";

const ProjectList = props => {
  const renderProjects = () => props.projects.map((project, index) => {
    return (<li key={cuid()} className="project-link" >
      <DeleteProject handleDelete={() => props.handleDelete(project)}/>
      <Link to={`/${project.id}`}>
        {props.projects[index].attributes.name}
      </Link>
    </li>)})

  return (
    <div id="project container">
      <nav id="sidebar">
        <div id="sidebar-header">
          <h3>My Projects</h3>
        </div>
        <ul className="my-projects-list">
          {renderProjects()}
        </ul>
        <NewProject handleNew={props.handleNew} />
      </nav>
    </div>
  )
}

export default ProjectList;