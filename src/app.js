import React from 'react'
import EmployeeTable from './EmployeeTable'
import Navbar from './Navbar'
import axios from 'axios'
import { HashRouter, Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  async componentDidMount() {
    const employees = (await axios.get('/api/employees/0')).data
    this.setState({ count: employees.count })
  }
  render() {
    const { count } = this.state
    return (
      <HashRouter>
        <h1>Acme Pager</h1>
        <Route path="/:page?" component={EmployeeTable} />
        <Route path="/:page?" render={() => <Navbar count={ count } /> } />
      </HashRouter>
    )
  }
}

export default App