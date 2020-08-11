import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { updateStep } from "../../actions/steps";
import { compose } from "redux";
import { connect } from "react-redux";

class StepEdit extends Component {
  state = {
    header: '',
    materials: '',
    time: '',
    directions: '',
    project_id: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Header: <input type="text" id="header" />
          Materials: <input type="text" id="materials" />
          Time: <input type="number" id="time" />
          Directions: <textarea type="text" id="directions" />
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    )
  }
}

export default compose(
  withRouter,
  connect(null, { updateStep }))(StepEdit);