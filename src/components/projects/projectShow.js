import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class ProjectShow extends Component {
  handleEdit = project => {
    this.props.history.push(`${project.id}/edit`)
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
          <button id="edit-project-btn" onClick={() => this.handleEdit(project)}>EDIT</button>
        </div>
      )
    }
    else {
      return <Redirect to='/' />
    }
  }
}

export default withRouter(ProjectShow);