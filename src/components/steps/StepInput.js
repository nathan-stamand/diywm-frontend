import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addStep } from "../../actions/steps";

class StepInput extends Component {
  state = {
    header: '',
    materials: '',
    time: '',
    directions: '',
    project_id: ''
  }

  componentDidMount = () => {
    this.setState({
      project_id: this.props.project.id
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addStep(this.state)
    this.props.history.push(`${this.props.project.id}/steps`)
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  
  render () {
    return (
      <div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="header">Header:</label><br/>
          <input required type="text" id="header" maxLength="50" value={this.state.header} onChange={this.handleChange} /><br/><br/>
          Time: <input required type="number" id="time" max="999" min="0" value={this.state.time} onChange={this.handleChange} /> minute(s)<br/><br/>
          <label htmlFor="directions">Directions: </label><br/>
          <textarea required id="directions" maxLength="200" value={this.state.directions} onChange={this.handleChange} /><br/><br/>
          <input type='submit' value='SAVE STEP' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addStep: payload => dispatch(addStep(payload))
})

export default compose(
  withRouter,
  connect(null, mapDispatchToProps))(StepInput);