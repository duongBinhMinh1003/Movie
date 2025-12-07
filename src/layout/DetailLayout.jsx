import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/header/Header'

export default function DetailLayout() {
  return (
    <div className=''>
        <Header ></Header>
        <Outlet></Outlet>
    </div>
  )
}
