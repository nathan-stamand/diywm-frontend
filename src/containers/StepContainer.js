import React, { Component } from "react";
import cuid from 'cuid'
import Step from "../components/steps/Step";
import StepEdit from '../components/steps/StepEdit'
import { addStep, deleteStep, updateStep } from "../actions/steps";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

class StepContainer extends Component {
  mappedSteps = () => {
    const pathArray = this.props.location.pathname.split('/').slice(3)
    const steps = this.props.steps ? this.props.steps.filter(step => {
      return step.project_id || step.attributes.project_id === parseInt(this.props.project.id)
    }) : []
    return steps.map(step => {
      if (step.id === pathArray[0] && pathArray[1] === 'edit') {
        return <StepEdit key={cuid()} id={step.id} updateStep={this.props.updateStep} step={step.attributes} />
      }
      else {
        return <Step key={cuid()} id={step.id} deleteStep={this.props.deleteStep} step={step.attributes} />
      }
    })
  }

  showAddStepBtn = () => {
    const pathArray = this.props.location.pathname.split('/')
    if (!pathArray.find(word => word === 'new')) {
      return <button id="add-step" onClick={() => this.handleAddStep()}>ADD STEP</button>
    }
  }

  handleAddStep = () => {
    this.props.history.push(`${this.props.match.url}/new`)
  }

  render() {
    return (
      <div>
        {this.showAddStepBtn()}
        {this.mappedSteps()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  steps: state.steps.steps
})

export default compose(
  withRouter,
  connect(mapStateToProps, { addStep, deleteStep, updateStep })
)(StepContainer);