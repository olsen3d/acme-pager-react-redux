import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEmployees } from './store'

export default function Test() {
  const employees = useSelector(state => state)
  const dispatch = useDispatch()
  let { page } = useParams()

  useEffect(() => {
    if (!page) page = 1
    dispatch(getEmployees(page))
  }, [page])

  if (employees.length === 0) return <h1>Loading...</h1>
  return (
    <div id="container">
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
    </div>
      )
}
