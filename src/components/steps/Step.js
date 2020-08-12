import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { deleteStep } from "../../actions/steps";
import { compose } from "redux";
import { connect } from "react-redux";

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
    // const materials = this.props.step.materials || 'none';
    const time = this.props.step.time || '0';
    const directions = this.props.step.directions || 'none';
    return(
      <div>
        <h4>{header}</h4>
        {/* <p>Materials: {materials}</p> */}
        <p>Time: {time}</p>
        <p>Directions: {directions}</p>
        <button id="edit-step" onClick={() => this.handleEdit()}>EDIT STEP</button>
        <button id="delete-step" onClick={() => this.handleDelete()}>DELETE STEP</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteStep: payload => dispatch(deleteStep(payload))
})

export default compose(
  withRouter,
  connect(null, mapDispatchToProps))(Step);