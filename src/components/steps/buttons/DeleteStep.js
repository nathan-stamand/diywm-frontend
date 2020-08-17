import React from 'react'

const DeleteStep = props => {
  return (
    <button className="delete-step" onClick={() => props.handleDelete()}>DELETE STEP</button>
  )
}

export default DeleteStep;