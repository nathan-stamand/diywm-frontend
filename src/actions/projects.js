export const loadProjects = () => {
  return (dispatch) => {
    dispatch({ type: 'LOAD_PROJECTS'})
    fetch('http://localhost:4000/projects')
      .then(res => res.json())
      .then(resJSON => {
        dispatch({ type: 'ADD_PROJECTS', projects: resJSON.data})
      })
  }
}

export const createProject = project => {
  const projectObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(project)
  }
  return (dispatch) => {
    dispatch({type: 'CREATE_PROJECT', project});
    fetch('http://localhost:4000/projects', projectObject)
      .then(() => {
        dispatch(loadProjects())
      })
  }
}

export const deleteProject = id => {
  const projectObject = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({project_id: id})
  }
  return (dispatch) => {
    dispatch({type: 'DELETE_PROJECT', id});
    fetch(`http://localhost:4000/projects/${id}`, projectObject)
      .then(() => {
        dispatch(loadProjects())
      })
  }
}

export const updateProject = project => {
  return
}