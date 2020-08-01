import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import ProjectList from "../components/projects/projectList";
import ProjectShow from "../components/projects/projectShow";
import ProjectInput from "../components/projects/projectInput";
import ProjectEdit from "../components/projects/ProjectEdit";

class ProjectPage extends Component {
  state = {
    redirect: false
  }

  findRoute = () => {
    const id = this.props.location.pathname.split('/').slice(1)
    const project = this.props.projects.find(proj => proj.id === id[0])
    if (id[0] === 'new') {
      return <Route path={'/new'} render={routerProps => {
        return <ProjectInput {...routerProps} />
      }} />
    }
    else if (project && id[1] === 'edit') {
      return <Route path={`/:projectId/edit`} render={routerProps => {
        return <ProjectEdit {...routerProps} projects={this.props.projects} />
      }} />
    }
    else if (project && !id[1]) {
      return <Route path={`/:projectId`} render={routerProps => {
        return <ProjectShow {...routerProps} projects={this.props.projects} /> 
      }} />
    }
    else {
      return <Redirect to="/"></Redirect>
    }
  }

  redirectNewProject = () => {
    this.setState({
      redirect: 'new'
    })
  }

  render() {
    if (this.state.redirect === 'new') {
      this.setState({ redirect: false })
    }
    return (
      <div>
        {this.state.redirect === 'new' ? <Redirect to='/new'></Redirect> : null}
        <ProjectList projects={this.props.projects} />
        <button id='new-proj-btn' onClick={() => this.redirectNewProject()}>+</button>
        {this.findRoute()}
      </div>
    )
  }
}

export default ProjectPage;