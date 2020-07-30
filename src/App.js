import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadProjects } from './actions/projects'
import ProjectList from './containers/projectList'
import './App.css';

class App extends Component{

  componentDidMount() {
    this.props.loadProjects()
  }

  handleLoadProjects = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    }
    else {
      return <div><ProjectList projects={this.props.projects} /></div>
    }
  }

  render () {
    return (
      <div className="App">
        <h1>Projects</h1>
        {this.handleLoadProjects()}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return ({
    projects: state.projects,
    loading: state.loading
  })
}

export default connect(mapDispatchToProps, { loadProjects })(App);
