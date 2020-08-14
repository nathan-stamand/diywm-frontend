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
          <label htmlFor="header">Header:</label><br/>
          <input required type="text" id="header" maxLength="50" value={this.state.header} onChange={this.handleChange}/><br/><br/>
          Time: <input required type="number" id="time" max="999" min="0" value={this.state.time} onChange={this.handleChange}/> minute(s)<br/><br/>
          <label htmlFor="directions">Directions:</label><br/>
          <textarea required type="text" maxLength="200" id="directions" value={this.state.directions} onChange={this.handleChange}/><br/><br/>
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    )
  }
}

export default compose(
  withRouter,
  connect(null, { updateStep }))(StepEdit);