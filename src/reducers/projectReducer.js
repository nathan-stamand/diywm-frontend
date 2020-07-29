const projectReducer = (state = {projects: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOAD_PROJECTS':  
      return;
    case 'ADD_PROJECT':
      return;
    case 'DELETE_PROJECT':
      return;
    case 'UPDATE_PROJECT':
      return;
    default:
      return state;
  }
}

export default projectReducer;