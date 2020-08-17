import React from "react";

const EditStep = props => {
  return (
    <button id="edit-step" onClick={() => props.handleEdit()}>EDIT STEP</button>
  )
}

export default EditStep;