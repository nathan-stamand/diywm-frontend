import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Step extends Component {
  handleEdit = () => {
    const id = this.props.id
    this.props.history.push(`${this.props.match.url}/${id}/edit`)
  }

  handleDelete = () => {
    const id = this.props.id
    const projectId = this.props.match.url.split('/')[1]
    const ids = {project: projectId, step: id}
    this.props.deleteStep(ids)
  }

  render() {
    const header = this.props.step.header;
    const time = this.props.step.time || '0';
    const directions = this.props.step.directions || 'none';
    return(
      <div>
        <h4>{header}</h4>
        <p>Time: {time} minute(s)</p>
        <p>Directions: {directions}</p>
        <button id="edit-step" onClick={() => this.handleEdit()}>EDIT STEP</button>
        <button id="delete-step" onClick={() => this.handleDelete()}>DELETE STEP</button>
      </div>
    )
  }
}

export default withRouter(Step);