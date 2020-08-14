import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from 'react-router-dom';
import ProjectPage from './containers/ProjectPage'
import { loadProjects, createProject, deleteProject, updateProject } from "./actions/projects";
import { loadSteps } from "./actions/steps";
import './App.css';
import { compose } from 'redux';

class App extends Component{

  componentDidMount() {
    this.props.loadProjects()
    this.props.loadSteps()
  }

  handleLoadProjects = (routerProps) => {
    if (this.props.loading) {
      return <div>Loading...</div>
    }
    else {
      return <ProjectPage {...routerProps} deleteProject={deleteProject} projects={this.props.projects} />
    }
  }

  returnHome = () => {
    this.props.history.push('/')
  }

  render () {
    return (
      <div className="App">
        <div id="main-heading" onClick={this.returnHome}><h1>DIY With Me!</h1></div>
        <Route path='/' render={routerProps => {
          return this.handleLoadProjects(routerProps)
        }} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    projects: state.projects.projects,
    steps: state.steps.steps,
    loading: state.projects.loading
  })
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { loadProjects, loadSteps, createProject, deleteProject, updateProject }))
    (App);
