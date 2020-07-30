import React, { Component } from 'react';
import { connect } from "react-redux";
import { addProject } from "../../actions/projects";

class ProjectInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Project Name</label><br/>
          <input type="text" id="name"/><br/><br/>

          <label htmlFor="blog">Blog</label><br/>
          <textarea type="text" id="blog"/><br/><br/>

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

const mapDispatchToProps = dispatch => {
  return ({
    addProject: payload => dispatch(addProject(payload))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectInput);