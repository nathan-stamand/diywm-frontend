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
        <form onSubmit={this.handleSubmit}>
          Header: <input type="text" id="header" value={this.state.header} onChange={this.handleChange} />
          {/* Materials: <input type="text" id="materials" value={this.state.materials} onChange={this.handleChange} /> */}
          Time: <input type="number" id="time" value={this.state.time} onChange={this.handleChange} />
          Directions: <textarea id="directions" value={this.state.directions} onChange={this.handleChange} />
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