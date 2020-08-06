import React, { Component } from "react";
import ProjectList from "../components/projects/ProjectList";
import ProjectShow from "../components/projects/ProjectShow";
import ProjectInput from "../components/projects/ProjectInput";
import ProjectEdit from "../components/projects/ProjectEdit";
import { Switch, Route } from "react-router-dom";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <ProjectList projects={this.props.projects} />
        <Switch>
          <Route path={`/new`}>
            <ProjectInput />
          </Route>
          <Route path={`/:projectId/edit`}>
            <ProjectEdit projects={this.props.projects}/>
          </Route>
          <Route path={`/:projectId`}>
            <ProjectShow projects={this.props.projects}/>
          </Route>          
        </Switch>
      </div>
    )
  }
}

export default ProjectPage;