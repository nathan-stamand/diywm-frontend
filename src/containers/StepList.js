import React, { Component } from "react";
import cuid from 'cuid'
import Step from "../components/steps/Step";
import StepEdit from '../components/steps/StepEdit'
import { addStep, deleteStep, updateStep } from "../actions/steps";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

class StepList extends Component {
  mappedSteps = () => {
    const pathArray = this.props.location.pathname.split('/').slice(3)
    return this.props.steps.map(step => {
      if (step.id === pathArray[0] && pathArray[1] === 'edit') {
        return <StepEdit key={cuid()} id={step.id} updateStep={this.props.updateStep} step={step.attributes} />
      }
      else {
        return <Step key={cuid()} id={step.id} deleteStep={this.props.deleteStep} step={step.attributes} />
      }
    })
  }

  render() {
    return (
      <div>
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
)(StepList);