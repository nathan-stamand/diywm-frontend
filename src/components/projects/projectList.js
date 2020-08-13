import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteProject } from "../../actions/projects";
import { connect } from 'react-redux';
import { compose } from "redux";
import cuid from "cuid";

class ProjectList extends Component {
  renderProjects = () => this.props.projects.map((project, index) => {
    return (<li key={cuid()} className="project-link" >
      <button className="delete-btn" path="/" onClick={() => this.handleDelete(project)}>DELETE</button>
      <Link to={`/${project.id}`}>
        {this.props.projects[index].attributes.name}
      </Link>
    </li>)})

  handleDelete = project => {
    this.props.deleteProject(project.id)
  }

  handleNew = () => {
    this.props.history.push('/new')
  }

  render() {
    return (
      <div id="project container">
        <nav id="sidebar">
          <div id="sidebar-header">
            <h3>My Projects</h3>
          </div>
          <ul className="my-projects-list">
            {this.renderProjects()}
          </ul>
          <button id='new-project-btn' onClick={this.handleNew}>+</button>
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProject: payload => dispatch(deleteProject(payload))
})


export default compose(withRouter, connect(null, mapDispatchToProps))(ProjectList);