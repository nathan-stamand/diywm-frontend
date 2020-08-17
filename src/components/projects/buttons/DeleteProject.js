import React from "react";

const DeleteProject = props => {
  return (
    <button className="delete-btn" onClick={() => props.handleDelete(props.project)}>DELETE</button>
  )
}

export default DeleteProject;