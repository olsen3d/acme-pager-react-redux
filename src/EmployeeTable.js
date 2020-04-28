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
          <th className="first">First Name</th>
          <th className="last">Last Name</th>
          <th className="email">Email</th>
          <th className="title">Title</th>
        </tr>
      </thead>
    <tbody>
    {
      employees.map( employee => {
        return (
          <tr key={employee.id} >
          <td className="first">{employee.firstName}</td>
          <td className="last">{employee.lastName}</td>
          <td className="email">{employee.email}</td>
          <td className="title">{employee.title}</td>
          </tr>
          )
        })
      }
    </tbody>
    </table>
    )
  }
