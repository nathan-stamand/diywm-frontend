import cuid from 'cuid';

const stepReducer = (state = {steps: [], loading: false}, action) => {
  switch (action.type) {
    case ('LOAD_STEPS'):
      return {
        ...state,
        steps: [...state.steps],
        loading: true
      }
    case ('ADD_STEPS'):
      return {
        ...state,
        steps: action.steps,
        loading: false
      }
    default:
      return state;
  }
}

export default stepReducer;