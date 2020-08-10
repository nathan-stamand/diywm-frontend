import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class StepInput extends Component {
  handleSubmit = event => {
    event.preventDefault()
  }
  
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Header: <input type="text" id="header" />
          Materials: <input type="text" id="materials" />
          Time: <input type="number" id="time" />
          Directions: <textarea id="directions" />
          <input type='submit' value='SAVE STEP' />
        </form>
      </div>
    )
  }
}

export default withRouter(StepInput);