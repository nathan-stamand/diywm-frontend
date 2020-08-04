import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ProjectEdit extends Component {
  state = {
    name: '',
    blog: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render () {
    return (
      <div>
        <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
        <textarea id="blog" value={this.state.blog} onChange={this.handleChange} />
      </div>
    )
  }
}

export default withRouter(ProjectEdit);