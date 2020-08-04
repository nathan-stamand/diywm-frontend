import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProject } from "../../actions/projects";
import { connect } from 'react-redux';

class ProjectList extends Component {
  renderProjects = () => this.props.projects.map((project, index) => {
    return (<li key={project.attributes.key}>
      <Link to={`/${project.id}`}>
        {this.props.projects[index].attributes.name}
      </Link>
      <button id="delete-btn" path="/" onClick={() => this.handleDelete(project)}>X</button>
    </li>)})

  handleDelete = project => {
    this.props.deleteProject(project.id)
  }

  render() {
    return (
      <div id="project-container">
        {this.renderProjects()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProject: payload => dispatch(deleteProject(payload))
})


export default connect(null, mapDispatchToProps)(ProjectList);