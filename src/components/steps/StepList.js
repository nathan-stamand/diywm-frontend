import React, { Component } from "react";
import cuid from 'cuid'
import Step from "./Step";
import { withRouter } from "react-router-dom";

class StepList extends Component {
  mappedSteps = () => {
    return this.props.steps.map(step => {
      return <Step key={cuid()} step={step} />
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