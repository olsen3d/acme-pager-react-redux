import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCount } from './store'

export default function Navbar() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const { page } = useParams()

  const pages = count ? new Array(Math.ceil(count / 50)).fill(0).map((_, i) => i + 1) : []
  const employeeCountStart = ((page - 1) * 50) + 1
  let employeeCountEnd = ((page - 1) * 50) + 50
  employeeCountEnd = employeeCountEnd > count ? count : employeeCountEnd

  useEffect(() => {
    dispatch(getCount())
  }, 0)

  return (
    <div id="container">
    <nav>
      <span>
        <Link to={page * 1 <= pages[0] ? `${page}` : `${page * 1 - 1}`}>Prev</Link>
      </span>
      {
        pages.map( _page => {
          return (
            <span key={_page} className={page * 1 === _page ? 'selected' : ''}>
              <Link to={`${_page}`} >{_page}</Link>
            </span>
            )
          })
      }
      <span>
        <Link to={page * 1 >= pages[pages.length - 1] ? `${page}` : `${page * 1 + 1}`}>Next</Link>
      </span>
    </nav>
    <span>showing employes {employeeCountStart} - {employeeCountEnd}</span>
    </div>
    )
  }
