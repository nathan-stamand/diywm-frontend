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

export const addProject = project => {
  return
}

export const deleteProject = id => {
  return
}

export const updateProject = project => {
  return
}