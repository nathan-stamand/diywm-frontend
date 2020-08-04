import React, { Component } from "react";
import ProjectList from "../components/projects/projectList";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <ProjectList projects={this.props.projects} />
        <button id='new-proj-btn' onClick={() => this.redirectNewProject()}>+</button>
      </div>
    )
  }
}

export default ProjectPage;