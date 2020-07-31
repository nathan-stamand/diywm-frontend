import cuid from 'cuid';

const projectReducer = (state = {projects: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOAD_PROJECTS':
      return {
        ...state,
        projects: [...state.projects],
        loading: true
      }
    case 'ADD_PROJECTS':
      return {
        ...state,
        projects: action.projects,
        loading: false
      }
    case 'CREATE_PROJECT':
      return {
        ...state,
        projects: [...state.projects],
        loading: true
      }
    case 'ADD_PROJECT':
      let project = {
        key: cuid(),
        ...action.project
      }
      return [...state.projects, project];
    case 'DELETE_PROJECT':
      return;
    case 'UPDATE_PROJECT':
      return;
    default:
      return state;
  }
}

export default projectReducer;