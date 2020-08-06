import React, { Component } from "react";
import cuid from 'cuid'
import Step from "./Step";
import StepEdit from './StepEdit'
import { withRouter } from "react-router-dom";

class StepList extends Component {
  mappedSteps = () => {
    const pathArray = this.props.location.pathname.split('/').slice(3)
    return this.props.steps.map(step => {
      if (step.id === parseInt(pathArray[0]) && pathArray[1] === 'edit') {
        return <StepEdit key={cuid()} step={step} />
      }
      else {
        return <Step key={cuid()} step={step} />
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

export default withRouter(StepList);