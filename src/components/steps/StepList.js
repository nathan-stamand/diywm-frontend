import React from "react";
import cuid from 'cuid'
import Step from "./Step";
import { withRouter } from "react-router-dom";

const StepList = props => {
  const mappedSteps = props.steps.map(step => {
    return <Step key={cuid()} step={step} />
  })
  return (
    <div>
      {mappedSteps}
    </div>
  )
}

export default withRouter(StepList);