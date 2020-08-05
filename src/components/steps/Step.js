import React, { Component } from "react";
import { cuid } from "cuid";

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
      </div>
    )
  }
}

export default Step;