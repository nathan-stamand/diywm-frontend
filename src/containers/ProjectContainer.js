import React, { Component } from "react";
import ProjectList from "../components/projects/ProjectList";
import ProjectShow from "../components/projects/ProjectShow";
import ProjectInput from "../components/projects/ProjectInput";
import ProjectEdit from "../components/projects/ProjectEdit";
import { createProject, deleteProject, updateProject } from "../actions/projects";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

class ProjectContainer extends Component {
  handleDelete = (project) => {
    this.props.deleteProject(project.id)
  }

  handleNew = () => {
    this.props.history.push('/new')
  }

  render() {
    return (
      <div>
        <ProjectList projects={this.props.projects} handleNew={this.handleNew} handleDelete={this.handleDelete} />
        <Switch>
          <Route path={`/new`}>
            <ProjectInput projects={this.props.projects} createProject={this.props.createProject}/>
          </Route>
          <Route path={`/:projectId/edit`}>
            <ProjectEdit projects={this.props.projects} updateProject={this.props.updateProject}/>
          </Route>
          <Route path={`/:projectId`}>
            <ProjectShow projects={this.props.projects}/>
          </Route>          
        </Switch>
      </div>
    )
  }
}

export default connect(null, { createProject, deleteProject, updateProject })(ProjectContainer);