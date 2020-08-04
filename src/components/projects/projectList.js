import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteProject } from "../../actions/projects";
import { connect } from 'react-redux';
import { compose } from "redux";

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

  handleNew = () => {
    this.props.history.push('/new')
  }

  render() {
    return (
      <div id="project-container">
        {this.renderProjects()}
        <button id='new-project-btn' onClick={this.handleNew}>+</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProject: payload => dispatch(deleteProject(payload))
})


export default compose(withRouter, connect(null, mapDispatchToProps))(ProjectList);