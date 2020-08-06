import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import ProjectPage from './containers/ProjectPage'
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
        <Route path='/' render={routerProps => {
          return this.handleLoadProjects(routerProps)
        }} />
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
