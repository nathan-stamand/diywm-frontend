import React from "react";
import cuid from 'cuid'
import Step from "./Step";

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

export default StepList;