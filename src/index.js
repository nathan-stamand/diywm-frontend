import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import projectReducer from './reducers/projectReducer.js';
import stepReducer from "./reducers/stepReducer.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  projects: projectReducer,
  steps: stepReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
