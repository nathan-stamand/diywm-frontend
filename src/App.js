import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ProjectPage from './containers/projectPage'
import { loadProjects, createProject, deleteProject, updateProject } from "./actions/projects";
import './App.css';

class App extends Component{

  componentDidMount() {
    this.props.loadProjects()
  }

  handleLoadProjects = (routerProps) => {
    if (this.props.loading) {
      return <div>Loading...</div>
    }
    else {
      return <ProjectPage {...routerProps} deleteProject={deleteProject} projects={this.props.projects} />
    }
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Route path='/' render={routerProps => {
            return this.handleLoadProjects(routerProps)
          }} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    projects: state.projects,
    loading: state.loading
  })
}

export default connect(mapStateToProps, { loadProjects, createProject, deleteProject, updateProject })(App);
