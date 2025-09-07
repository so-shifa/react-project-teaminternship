import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  let navigate = useNavigate();

  let [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  let { email, password } = formdata;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    
   // toastify + navigate to landing page
      // ✅ success popup
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/landing");
      }, 2000); // wait for toast before navigating
    setFormdata({ email: "", password: "" });
    }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-[#111] text-white rounded-xl shadow-lg border border-yellow-500 w-[380px] p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-400">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm mb-1 block">Email</label>
            <div className="flex items-center bg-[#1c1c1c] rounded-lg border border-gray-700 px-3">
              <MdEmail className="text-gray-400 mr-2" />
              <input
                className="w-full bg-transparent py-2 focus:outline-none text-gray-200 placeholder-gray-500"
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                value={email}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm mb-1 block">Password</label>
            <div className="flex items-center bg-[#1c1c1c] rounded-lg border border-gray-700 px-3">
              <FaLock className="text-gray-400 mr-2" />
              <input
                className="w-full bg-transparent py-2 focus:outline-none text-gray-200 placeholder-gray-500"
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
                value={password}
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Sign In
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm mt-6">
          don’t have an account?{" "}
          <Link to="/" className="text-yellow-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
{/* pop up 👇*/}
      <ToastContainer />
    </div>
  );
};

export default Signin;
