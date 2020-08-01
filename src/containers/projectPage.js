import React, { Component } from "react";
import { Route } from "react-router-dom";
import ProjectList from "../components/projects/projectList";
import ProjectShow from "../components/projects/projectShow";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <ProjectList projects={this.props.projects} />
        <Route path={`/:projectId`} render={routerProps => {
          return <ProjectShow {...routerProps} projects={this.props.projects} /> 
        }} />
      </div>
    )
  }
}

export default ProjectPage;