import React, { Component } from "react";
import StepList from "../components/steps/StepList";

class StepPage extends Component {
  render() {
    return (
      <div>
        <StepList steps={this.props.steps} />
      </div>
    )
  }
}

export default StepPage