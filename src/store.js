import { createStore, applyMiddleware, combineReducers } from 'redux'
import {createLogger} from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'

//constant
const GET_EMPLOYEES = 'GET_EMPLOYEES'
const GET_COUNT = 'GET_COUNT'

//action creator
const getEmployeesAction = employees => ({ type: GET_EMPLOYEES, employees })
const getCountAction = count => ({ type: GET_COUNT, count })

//thunk
const getEmployees = (page) => {
  return async dispatch => {
    const employees = (await axios.get(`/api/employees/${page}`))
    return dispatch(getEmployeesAction(employees.data.rows))
  }
}

const getCount = () => {
  return async dispatch => {
    const count = (await axios.get(`/api/employees/`))
    return dispatch(getEmployeesAction(employees.data.count))
  }
}

const employeesReducer = (state = [], action) => {
  if ( action.type === GET_EMPLOYEES) {
    return action.employees
  }
  return state
};

const countReducer = (state = 0, action) => {
  if ( action.type === GET_COUNT) {
    return action.count
  }
  return state
};

const reducer = combineReducers({
  employees: employeesReducer,
  count: countReducer
});

//store
const store = createStore(reducer, applyMiddleware(
  thunks,
  createLogger({collapsed: true}),
));

export default store
export {
  getEmployees
}
