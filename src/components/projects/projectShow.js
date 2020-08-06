import React, { Component } from "react";
import { withRouter, Redirect, Route } from "react-router-dom";
import StepPage from "../../containers/StepPage";

class ProjectShow extends Component {
  handleEdit = () => {
    this.props.history.push(`${this.props.match.url}/edit`)
  }

  handleShowSteps = project => {
    const url = this.props.location.pathname.split('/')
    if (url.find(el => el === 'steps')) {
      this.props.history.push(`/${project.id}`)
    }
    else {
      this.props.history.push(`${this.props.match.url}/steps`)
    }
  }
  
  render() {
    const id = this.props.match.params.projectId;
    const project = this.props.projects.find(proj => proj.id === id)
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
          <button id="edit-project-btn" onClick={() => this.handleEdit()}>EDIT</button>
          <button id="show-hide-steps" onClick={() => this.handleShowSteps(project)}>SHOW/HIDE STEPS</button>
          <Route path={`${this.props.match.url}/steps`} render={() =>
            <StepPage project={project} steps={project.attributes.steps} />
          } />
        </div>
      )
    }
    else {
      return <Redirect to='/' />
    }
  }
}

export default withRouter(ProjectShow);