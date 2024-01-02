import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import Header from '../component/header/Header'

export default function Layout() {
  return (
    <div className='space-y-5'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
