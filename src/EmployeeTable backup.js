/* eslint-disable react/jsx-key */
import React from 'react'
import axios from 'axios'

class EmployeeTable extends React.Component {
  constructor() {
    super()
    this.state = {
      employees: []
    }
  }
  async componentDidMount() {
    const page = this.props.match.params.page
    const employees = (await axios.get(`/api/employees/${page}`)).data
    this.setState({ employees: employees.rows })
  }
  async componentDidUpdate(prevprops) {
    const page = this.props.match.params.page
    const lastPage = prevprops.match.params.page
    if (page !== lastPage) {
      const employees = (await axios.get(`/api/employees/${page}`)).data
      this.setState({ employees: employees.rows })
    }
  }

  render() {
    const { employees } = this.state
    if (employees.length === 0) return <h1>Loading...</h1>
    return (
      <div id='container'>
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
}

export default EmployeeTable
