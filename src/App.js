import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadProjects } from './actions/projects'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ProjectPage from './containers/projectPage'
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
      return <ProjectPage {...routerProps} projects={this.props.projects} />
    }
  }

  render () {
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          <Route exact path="/" render={() => <div>HomePage</div>} />
          <Route path='/projects' render={routerProps => {
            return this.handleLoadProjects(routerProps)
          }}
          />
        </div>
      </Router>
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
