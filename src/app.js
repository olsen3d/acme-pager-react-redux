import React from 'react'
import EmployeeTable from './EmployeeTable-hooks'
import Navbar from './Navbar'
import Test from './Test'
import axios from 'axios'
import { HashRouter, Route, Redirect } from 'react-router-dom'

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
        <Route exact path="/" ><Redirect to="/1" /></Route>
        <Route path="/:page?" render={() => <EmployeeTable /> } />
        <Route path="/:page?" render={() => <Navbar count={ count } /> } />
      </HashRouter>
    )
  }
}

export default App
