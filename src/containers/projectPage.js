import React, { Component } from "react";
import { Route } from "react-router-dom";
import ProjectList from "../components/projects/projectList";
import ProjectShow from "../components/projects/projectShow";
import ProjectInput from "../components/projects/projectInput";

class ProjectPage extends Component {
  findRoute = () => {
    const id = this.props.location.pathname.split('/').slice(1)
    const project = this.props.projects.find(proj => proj.id === id[0])
    if (id[0] === 'new') {
      return <Route path={'/new'} render={routerProps => {
        return <ProjectInput {...routerProps} />
      }} />
    }
    else if (project && id[1] === 'edit') {
      console.log('bruh we out here')
      return <div></div>
    }
    else if (project && !id[1]) {
      return <Route path={`/:projectId`} render={routerProps => {
        return <ProjectShow {...routerProps} projects={this.props.projects} /> 
      }} />
    }
  }

  render() {
    return (
      <div>
        <ProjectList projects={this.props.projects} />
        {this.findRoute()}
      </div>
    )
  }
}

export default ProjectPage;