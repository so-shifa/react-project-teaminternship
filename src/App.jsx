import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import UpdateBootCamp from './components/UpdateBootCamp'
import UpdateCourse from './components/UpdateCourse'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <UpdateBootCamp/>
    <UpdateCourse/> */}
    </>
    
  )
}

export default App