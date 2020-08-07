export const loadSteps = () => {
  return (dispatch) => {
    dispatch({type: 'LOAD_STEPS'})
    fetch('http://localhost:4000/steps')
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON)
        dispatch({type: 'ADD_STEPS', steps: resJSON})
      })
  }
}