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
        console.log(loadProjects)
        dispatch(loadProjects())
      })
  }
}

export const addProject = project => {
  return ({
    type: 'ADD_PROJECT',
    project
  })
}

export const deleteProject = id => {
  return
}

export const updateProject = project => {
  return
}