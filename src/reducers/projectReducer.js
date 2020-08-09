import cuid from 'cuid';

const projectReducer = (state = {projects: [], loading: false }, action) => {
  let projects = state.projects.slice()
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
      return {
        ...state,
        projects: projects.filter(proj => proj.id !== action.id)
      }
    case 'UPDATE_PROJECT':
      const updatedProjects = projects.map(proj => {
        if (proj.id === action.project.id) {
          return action.project
        }
        else {
          return proj
        }
      })
      return {
        ...state,
        projects: updatedProjects
      };
    default:
      return state;
  }
}

export default projectReducer;