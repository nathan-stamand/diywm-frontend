import React, { Component } from "react";
import StepList from "../components/steps/StepList";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class StepPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path={`${this.props.match.url}`} render={routerProps => {
            return <StepList {...routerProps} steps={this.props.steps} />
          }}>
          </Route>
        </Router>
      </div>
    )
  }
}

export default withRouter(StepPage);