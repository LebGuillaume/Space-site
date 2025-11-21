import { Footer, Header, Navbar } from '@/components'
import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
<>
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer />
    
</>
  )
}

export default HomeLayout