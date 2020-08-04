import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { updateProject } from "../../actions/projects"
import { compose } from "redux";
import { connect } from "react-redux";

class ProjectEdit extends Component {
  state = {
    name: '',
    blog: '',
    id: ''
  }

  componentDidMount = () => {
    const id = this.props.match.params.projectId
    const project = this.props.projects.find(proj => proj.id === id)
    if (project) {
      this.setState({
        name: project.attributes.name,
        blog: project.attributes.blog,
        id: project.id
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
    const id = this.state.id
    this.props.updateProject(this.state)
    this.props.history.push(`/${id}`)
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

const mapDispatchToProps = dispatch => ({
    updateProject: payload => dispatch(updateProject(payload))
})

export default compose(
  withRouter,
  connect(null, mapDispatchToProps))(ProjectEdit);