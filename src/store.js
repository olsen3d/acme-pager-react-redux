import { createStore, applyMiddleware, combineReducers } from 'redux'
import {createLogger} from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'

//constant
const GET_EMPLOYEES = 'GET_EMPLOYEES'
const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE'
const GET_COUNT = 'GET_COUNT'

//action creator
const getEmployeesAction = employees => ({ type: GET_EMPLOYEES, employees })
const createEmployeeAction = employee => ({ type: CREATE_EMPLOYEE, employee })
const getCountAction = count => ({ type: GET_COUNT, count })

//thunk
const getEmployees = (page) => {
  return async dispatch => {
    const employees = (await axios.get(`/api/employees/${page}`))
    return dispatch(getEmployeesAction(employees.data.rows))
  }
}

const createEmployee = (employee) => {
  return async dispatch => {
    const newEmployee = (await axios.post('/api/employees/', employee))
    return dispatch(createEmployeeAction(newEmployee.data))
  }
}

const getCount = () => {
  return async dispatch => {
    const count = (await axios.get(`/api/employees/`))
    return dispatch(getCountAction(count.data.count))
  }
}

//reducers
const employeesReducer = (state = [], action) => {
  if ( action.type === GET_EMPLOYEES) return action.employees
  if ( action.type === CREATE_EMPLOYEE) return [action.employee, ...state]
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
  getEmployees,
  createEmployee,
  getCount
}
