import React, { Component } from "react";
import { withRouter, Redirect, Route } from "react-router-dom";
import StepPage from "../../containers/StepPage";
import StepInput from "../steps/StepInput";
import { connect } from "react-redux";
import { compose } from "redux";

class ProjectShow extends Component {
  handleEdit = () => {
    this.props.history.push(`${this.props.match.url}/edit`)
  }

  handleShowSteps = project => {
    const url = this.props.location.pathname.split('/')
    if (url.find(el => el === 'steps')) {
      this.props.history.push(`/${project.id}`)
    }
    else {
      this.props.history.push(`${this.props.match.url}/steps`)
    }
  }

  renderTotalTime = project => {
    const reducer = (acc, currVal) => ({attributes: {time: acc.attributes.time + currVal.attributes.time}})
    const steps = this.props.steps.filter(step => {
      return step.project_id || step.attributes.project_id === parseInt(project.id)
    })
    if (steps && steps.length > 0) {
      let totalMin = steps.reduce(reducer).attributes.time
      let hours = parseInt(totalMin / 60)
      let hourString = (hours === 1 ? 'hour' : 'hours')
      let min = totalMin % 60
      let minString = (min === 1 ? 'minute' : 'minutes')
      return (`${hours} ${hourString} ${min} ${minString}`)
    }
    else {
      return 'None'
    }
  }

  renderShowSteps = project => {
    const steps = this.props.steps.filter(step => {
      return step.project_id || step.attributes.project_id === parseInt(project.id)
    })
    if (steps && steps.length > 0) {
      return <Route path={`${this.props.match.url}/steps`} render={() =>
        <StepPage project={project} steps={steps} />
      } />
    }
  }

  handleAddStep = () => {
    this.props.history.push(`${this.props.match.url}/steps/new`)
  }
  
  render() {
    const id = this.props.match.params.projectId;
    const project = this.props.projects.find(proj => proj.id === id)
    if (project) {
      return (
        <div className="content">
          <h1>{project.attributes.name}</h1>
          <h3>Blog</h3>
            <p>{project.attributes.blog}</p>
          <button id="edit-project-btn" onClick={() => this.handleEdit()}>EDIT PROJECT NAME/BLOG</button>
          <h3>Materials</h3>
            <p>{project.attributes.materials || 'None'}</p>
          <h3>Time Required</h3>
            <p>{this.renderTotalTime(project)}</p>
          <button id="show-hide-steps" onClick={() => this.handleShowSteps(project)}>SHOW/HIDE STEPS</button>
          <button id="add-step" onClick={() => this.handleAddStep(project)}>ADD STEP</button>
          <Route path={`${this.props.match.url}/steps/new`} render={() => {
            return <StepInput project={project} />
          }} />
          {this.renderShowSteps(project)}
        </div>
      )
    }
    else {
      return <Redirect to='/' />
    }
  }
}

const mapStateToProps = state => ({
  steps: state.steps.steps
})

export default compose(
  withRouter,
  connect(mapStateToProps))(ProjectShow);