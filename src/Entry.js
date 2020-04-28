import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from './store'

export default function Entry() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const create = (employee) => {
    dispatch(createEmployee(employee))
    setFirstName('')
    setLastName('')
    setEmail('')
    setTitle('')
  }

  return (
  <div id="entry">
    <h4>New Entry</h4>
    <form>
      <label>First Name: </label>
        <input value={firstName} onChange={(ev) => {setFirstName(ev.target.value)}} />
      <label>Last Name: </label>
        <input value={lastName} onChange={(ev) => {setLastName(ev.target.value)}} />
      <label>Email: </label>
        <input value={email} onChange={(ev) => {setEmail(ev.target.value)}} />
      <label>Title: </label>
        <input value={title} onChange={(ev) => {setTitle(ev.target.value)}} />
      <button type="button" onClick={() => {create({firstName, lastName, email, title})}}>Submit</button>
    </form>
  </div>
  )
}
