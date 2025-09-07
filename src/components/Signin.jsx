import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {

let navigate=useNavigate();

let[formdata,setFormdata]=useState(
  {
    email:"",
    password:"",
  }
)

let {email,password}=formdata;

let handleChange=(e)=>{
    let{name,value}=e.target;
    setFormdata({ ...formdata, [name]:value});
}

let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formdata);
    navigate("/ENTERTHEPATHHH")
    setFormdata({...formdata, email:"", password:""})

}

  return (

   <>
   
    <div className="h-[450px] w-[450px] border-2 bg-red-300 flex flex-col justify-center items-center absolute left-120 top-20">
    <h1 className="text-[24px]">SignIn</h1> <br />

   <form onSubmit={handleSubmit} className="flex flex-col">

    <label htmlFor="">Email</label>
    <input className="border-2 w-[300px] bg-purple-300 " type="email" placeholder="enter email" 
     name='email' onChange={handleChange} value={formdata.email}/>

    <label htmlFor="">Password</label>
    <input className="border-2 w-[300px] bg-purple-300" type="password" placeholder="enter password"
    name='password' onChange={handleChange}  value={formdata.password}/> <br />

    <button className="border-2 p-1 w-[100px] bg-purple-300">Submit</button>
    <p>Don't have an account? </p> 

   </form>
    </div>
  
   
   </>
    
  )
  return 
}

export default Signin