/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function EmployeeTable() {
  const [employees, setEmployees] = useState([])
  let { page } = useParams()

  useEffect(() => {
    if (!page) page = 1
    axios.get(`/api/employees/${page}`)
    .then( employees => setEmployees(employees.data.rows))
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
            <tr>
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

    export default EmployeeTable
