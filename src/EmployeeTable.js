import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getEmployees } from './store'

export default function EmployeeTable() {
  const employees = useSelector(state => state.employees)
  const dispatch = useDispatch()
  let { page } = useParams()

  useEffect(() => {
    dispatch(getEmployees(page - 1 || 0))
  }, [page])

  if (employees.length === 0) return <h1>Loading...</h1>
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
    <tbody>
    {
      employees.map( employee => {
        return (
          <tr key={employee.id} >
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.email}</td>
          <td>{employee.title}</td>
          </tr>
          )
        })
      }
    </tbody>
    </table>
    )
  }
