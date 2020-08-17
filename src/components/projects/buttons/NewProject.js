import React from "react";

const NewProject = props => {
  return (
    <button id="new-project-btn" onClick={event => props.handleNew(event)}>+</button>
  )
}

export default NewProject;