import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Navbar = ({ count }) => {
  const { page } = useParams()
  const pages = count ? new Array(Math.floor(count / 50)).fill(0).map((_, i) => i + 1) : []
  return (
    <nav>
      {
        pages.map( _page => {
          return (
            <Link key={_page} to={`${_page}`} className={page == _page ? 'selected' : ''}>{_page}</Link>
          )
        })
      }
    </nav>
  )
}

export default Navbar
