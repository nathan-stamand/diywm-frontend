import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { updateProject } from "../../actions/projects"
import { compose } from "redux";
import { connect } from "react-redux";

class ProjectEdit extends Component {
  state = {
    name: '',
    materials: '',
    blog: '',
  }

  componentDidMount = () => {
    const id = this.props.match.params.projectId
    const project = this.props.projects.find(proj => proj.id === id)
    if (project) {
      this.setState({
        name: project.attributes.name,
        materials: project.attributes.materials,
        blog: project.attributes.blog,
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
    const id = this.props.match.params.projectId
    const project = {id: id, attributes: {name: this.state.name, blog: this.state.blog}}
    this.props.updateProject(project)
    this.props.history.push(`/${id}`)
  }
  render () {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Project Name:</label><br/>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/><br/><br/>
          <label htmlFor="materials">Materials:</label><br/>
          <textarea id="materials" value={this.state.materials} onChange={this.handleChange} /><br/><br/>
          <label htmlFor="blog">Blog:</label><br/>
          <textarea id="blog" value={this.state.blog} onChange={this.handleChange} /><br/><br/>
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