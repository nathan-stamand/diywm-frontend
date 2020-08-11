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