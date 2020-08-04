import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ProjectEdit extends Component {
  state = {
    name: '',
    blog: ''
  }

  componentDidMount = () => {
    const id = this.props.match.params.projectId
    const project = this.props.projects.find(proj => proj.id === id)
    if (project) {
      this.setState({
        name: project.attributes.name,
        blog: project.attributes.blog
      })
    }
    else {
      this.props.history.push('/')
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Project Name:</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
          <label htmlFor="blog">Blog:</label>
          <textarea id="blog" value={this.state.blog} onChange={this.handleChange} />
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    )
  }
}

export default withRouter(ProjectEdit);