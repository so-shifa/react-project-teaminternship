import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
const Signup = () => {
    const navigate =useNavigate()
  let [state, setState] = useState({
    Username: "",
    email: "",
    Password: "",
    role:"",
    Url:""
  });
  
  let [showPassword, setShowPassword] = useState(false);
  let { Username, email, Password,role,Url } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    // console.log(e.target);
  };
  let submit = (e) => {
    e.preventDefault();
    console.log(state);
     navigate("/signin");
  };
  return (
    <>
      <section className=" h-150 flex justify-center items-center ">
        <h1 className=" h-147 w-100 rounded-2xl bg-[#111111] items-center flex flex-col gap-3 justify-center ">
          <h1 className="text-[#FFB900]  font-bold text-[20px]">Sign Up</h1>
          <div className="border-2 border-[#F16F1D] w-85 h-130 flex justify-center items-center rounded-2xl text-[white] ">
            <form action="">
              <h1 className="flex flex-col  w-70 h-120 gap-2">
                <label htmlFor="" className="font-semibold text-[gray]">
                  Enter Name
                </label>
                <div className="relative text-white">
                  {Username === "" && (
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  )}
                  <input
                    type="text"
                    name="Username"
                    value={Username}
                    className="border-[#262626] w-[91%] rounded-md h-10 px-5 text-[white] bg-[#262626]"
                    placeholder="        Enter Name"
                    onChange={handleChange}
                    id=""
                  />
                </div>
                <label htmlFor="" className="font-semibold text-[gray]">
                  Enter Your Email
                </label>
                <div className="relative text-white">
                  {email === "" && (
                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  )}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="border-[#262626] w-[91%] rounded-md h-10 px-5 text-[white] bg-[#262626]"
                    placeholder="        Enter Email"
                    onChange={handleChange}
                    id=""
                  />
                </div>
                <label htmlFor="" className="font-semibold text-[gray]">
                  Enter Your Password
                </label>
                <div className="relative text-white">
                  {Password === "" && (
                    <MdOutlinePassword className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-400" />
                  )}
                  <input
                    type={showPassword ? "text" : "password"}
                    name="Password"
                    value={Password}
                    className="border-[#262626] w-[91%] h-10 rounded-md px-5 text-[white] bg-[#262626]"
                    placeholder="        Enter Password"
                    onChange={handleChange}
                    id=""
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-10 top-1/2 rounded-md  -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <label htmlFor="" className="font-semibold text-[gray]">
                  Enter Name
                </label>
                <div className="relative text-white">
                  {role === "" && (
                    <FaUserTag className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                  )}
                   <select
                  name="role"
                value={role}
                onChange={handleChange}
             className="w-[91%] h-10 border border-gray-600 px-10 rounded-md bg-[#262626] text-white px-3 ">
        <option value="">  -- Select Role --</option>
        <option value="admin">Admin</option>
        <option value="student">Student</option>
      </select>
                </div>
                <label htmlFor="" className="font-semibold text-[gray]">
                  Avatar
                </label>
                <div className="relative text-white">
                  {Url === "" && (
                    <RxAvatar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  )}
                  <input
                    type="url"
                    name="Url"
                    value={Url}
                    className="border-[#262626] w-[91%] rounded-md h-10 px-5 text-[white] bg-[#262626]"
                    placeholder="        Enter Avatar Url"
                    onChange={handleChange}
                    id=""
                  />
                </div>
              <button onClick={submit} className="font-bold h-10 w-[91%] rounded-md bg-[#FFB900]">Sign Up</button>
                <h1 className="text-[12px] text-center">Already have an account?<span className="text-[#F16F1D]">Login</span></h1>
              </h1>

              
            </form>
          </div>
        </h1>
      </section>
    </>
  );
};

export default Signup;