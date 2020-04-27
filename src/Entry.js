import React from 'react'

export default function Entry() {

  return (
  <div id="entry">
    <h3>New Entry</h3>
    <form>
      <div>
        <label>First Name: </label><input />
      </div>
      <div>
        <label>Last Name: </label><input />
      </div>
      <div>
        <label>Email: </label><input />
      </div>
      <div>
        <label>Title: </label><input />
      </div>
      <button>Submit</button>
    </form>
  </div>
  )
}
