import React, { Component } from 'react';
import { connect } from "react-redux";
import { createProject } from '../../actions/projects';
import cuid from 'cuid';
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class ProjectInput extends Component {
  state = {
    name: '',
    materials: '',
    blog: '',
    key: cuid()
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createProject(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Project Name:</label><br/>
          <input required type="text" id="name" maxLength="50" value={this.state.name} onChange={this.handleChange}/><br/><br/>

          <label htmlFor="materials">Materials: </label><br/>
          <textarea required type="text" id="materials" maxLength="1000" value={this.state.materials} onChange={this.handleChange} /><br/><br/>

          <label htmlFor="blog">Blog: </label><br/>
          <textarea required type="text" id="blog" maxLength="1000" value={this.state.blog} onChange={this.handleChange}/><br/><br/>
          
          <input type="submit" value="Create Project" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    projects: state.projects
  })
}

const mapDispatchToProps = dispatch => ({
    createProject: payload => dispatch(createProject(payload))
  })

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))(ProjectInput);