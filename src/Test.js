import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCount } from './store'

export default function Test() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  console.log(count)

  useEffect(() => {
    dispatch(getCount())
  }, 0)

 return <h1>testing</h1>
}
