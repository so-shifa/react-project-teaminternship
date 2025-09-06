import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    
   <section className="border-2 flex justify-end space-x-4 h-[50px] text-[24px]">
     <Link to={"/"}>SignUp</Link>
    <Link to={"Signin"}>SignIn</Link>
   </section>
   </>
  )
}

export default Navbar