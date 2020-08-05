import React, { Component } from "react";
import StepList from "../components/steps/StepList";
import { withRouter} from "react-router-dom";

class StepPage extends Component {
  render() {
    return (
      <div>
        <StepList steps={this.props.steps} />
      </div>
    )
  }
}

export default withRouter(StepPage);