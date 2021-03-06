export const loadSteps = () => {
  return (dispatch) => {
    dispatch({type: 'LOAD_STEPS'})
    fetch('http://localhost:4000/steps')
      .then(res => res.json())
      .then(resJSON => {
        dispatch({type: 'ADD_STEPS', steps: resJSON.data})
      })
  }
}

export const addStep = step => {
  const stepObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(step)
  }
  return (dispatch) => {
    dispatch({type: 'ADD_STEP', step});
    fetch(`http://localhost:4000/projects/${step.project_id}/steps`, stepObj)
      .then(() => dispatch(loadSteps()))
  }
}

export const deleteStep = id => {
  const stepObj = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(id.step)
  }
  return (dispatch) => {
    dispatch({type: 'DELETE_STEP', id: id.step})
    fetch(`http://localhost:4000/projects/${id.project}/steps/${id.step}`, stepObj)
  }
}

export const updateStep = step => {
  const stepObj = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(step)
  }
  return (dispatch) => {
    dispatch({type: 'UPDATE_STEP', step})
    fetch(`http://localhost:4000/projects/${step.project_id}/steps/${step.id}`, stepObj)
      .then(() => dispatch(loadSteps()))
  }
}