import React from 'react'
import Navbar from './Navbar'
import EmployeeTable from './EmployeeTable'
import Entry from './Entry'
import { HashRouter, Route, Redirect } from 'react-router-dom'

export default function App() {
  return (
    <HashRouter>
      <h1>Acme Pager</h1>
      <Route exact path="/" ><Redirect to="/1" /></Route>
      <Route path="/:page?" render={() => <Navbar /> } />
      <div id="side">
      <Entry />
      <Route path="/:page?" render={() => <EmployeeTable /> } />
      </div>
    </HashRouter>
  )
}
