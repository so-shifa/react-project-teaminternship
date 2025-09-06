import React from 'react'
<<<<<<< HEAD
import Signup from './components/Signup'

const App = () => {
  return (
    
    <Signup></Signup>
=======
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
    
>>>>>>> 52320e24c6707181cb3a57ca35e7a54ad78a3d55
  )
}

export default App