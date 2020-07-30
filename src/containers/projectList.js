import React, { Component } from "react";

class ProjectList extends Component {
  listProjects = () => {
    return this.props.projects.map(proj => {
      return <li key={proj.attributes.key} >{proj.attributes.name}</li>
    })
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