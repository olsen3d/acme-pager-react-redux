import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';
import {createLogger} from 'redux-logger';

//constant
const GET_EMPLOYEES = 'GET_EMPLOYEES'

//action creator
const getEmployeesAction = employees => ({ type: GET_EMPLOYEES, employees })

//thunk
const getEmployees = (page) => {
  return async dispatch => {
    const employees = (await axios.get(`/api/employees/${page}`))
    return dispatch(getEmployeesAction(employees.data.rows))
  }
}

const employeesReducer = (state = [], action) => {
  if ( action.type === GET_EMPLOYEES) {
    return action.employees
  }
  return state;
};

//store
const store = createStore(employeesReducer, applyMiddleware(
  thunks,
  createLogger({collapsed: true}),
));

export default store;

export {
  getEmployees
}
