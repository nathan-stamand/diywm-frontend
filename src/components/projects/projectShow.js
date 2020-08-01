import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ProjectShow extends Component {
  render () {
    const id = this.props.match.params.projectId
    const project = this.props.projects.find(proj => proj.id === id)
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
      return <Redirect to="/"></Redirect>
    }
  }
}

export default ProjectShow;