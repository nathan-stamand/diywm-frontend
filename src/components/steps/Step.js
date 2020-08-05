import React, { Component } from "react";

class Step extends Component {
  render() {
    const header = this.props.step.header;
    const materials = this.props.step.materials || 'none';
    const time = this.props.step.time || '0';
    const directions = this.props.step.directions || 'none';
    return(
      <div>
        <h4>{header}</h4>
        <p>Materials: {materials}</p>
        <p>Time: {time}</p>
        <p>Directions: {directions}</p>
        <button id="edit-step">EDIT STEP</button>
        <button id="delete-step">DELETE STEP</button>
      </div>
    )
  }
}

export default Step;