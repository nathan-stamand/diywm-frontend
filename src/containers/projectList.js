import React, { Component } from "react";
import cuid from 'cuid';

class ProjectList extends Component {
  listProjects = () => {
    return this.props.projects.map(proj => <li key={cuid()}>{proj.attributes.name}</li>)
  }

  render() {
    return (
      <div>
        {this.listProjects()}
      </div>
    )
  }
}

export default ProjectList;