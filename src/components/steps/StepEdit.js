import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { updateStep } from "../../actions/steps";
import { compose } from "redux";
import { connect } from "react-redux";

class StepEdit extends Component {
  state = {
    id: '',
    header: '',
    materials: '',
    time: '',
    directions: '',
    project_id: '',
  }

  componentDidMount = () => {
    this.setState({
      id: this.props.id,
      header: this.props.step.header,
      // materials: this.props.step.materials,
      time: this.props.step.time,
      directions: this.props.step.directions,
      project_id: this.props.step.project_id
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.updateStep(this.state)
    this.props.history.push(`${this.props.match.url}`)
  }

  render() {
    return (
      <div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          Header: <input type="text" id="header" value={this.state.header} onChange={this.handleChange}/><br/><br/>
          Time: <input type="number" id="time" value={this.state.time} onChange={this.handleChange}/><br/><br/>
          Directions: <textarea type="text" id="directions" value={this.state.directions} onChange={this.handleChange}/><br/><br/>
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    )
  }
}

export default compose(
  withRouter,
  connect(null, { updateStep }))(StepEdit);