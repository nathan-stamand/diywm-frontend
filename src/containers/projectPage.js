import React from "react";
import { Route } from "react-router-dom";
import ProjectList from "../components/projects/projectList";
import ProjectShow from "../components/projects/projectShow";

const ProjectPage = ({ match, projects }) => {
    return (
      <div>
        <ProjectList projects={projects} />
        <Route path={`${match.url}/:projectId`} render={routerProps => <ProjectShow {...routerProps} projects={projects} /> }/>
      </div>
    )
}

export default ProjectPage;