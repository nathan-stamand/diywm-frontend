import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component{

  render () {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    projects: state.projects
  })
}

export default connect(mapStateToProps)(App);
