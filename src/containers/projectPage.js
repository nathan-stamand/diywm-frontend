import React, { Component } from "react";
import ProjectList from "../components/projects/projectList";
import ProjectShow from "../components/projects/projectShow";
import ProjectInput from "../components/projects/projectInput";
import ProjectEdit from "../components/projects/ProjectEdit";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <ProjectList history={this.props.history} projects={this.props.projects} />
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
        </Router>
      </div>
    )
  }
}

export default ProjectPage;