import React, { Component } from 'react';
import { connect } from "react-redux";
import { createProject } from '../../actions/projects';
import cuid from 'cuid';

class ProjectInput extends Component {
  state = {
    name: '',
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
    this.setState({name: '', blog: '', key: cuid()})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Project Name</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>

          <label htmlFor="blog">Blog</label>
          <textarea type="text" id="blog" value={this.state.blog} onChange={this.handleChange}/>

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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectInput);