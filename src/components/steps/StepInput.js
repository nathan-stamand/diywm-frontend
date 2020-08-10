import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class StepInput extends Component {
  render () {
    return (
      <div>
        <form >
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