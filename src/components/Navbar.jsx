import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 shadow-lg flex justify-between items-center border-b border-yellow-500">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-yellow-400 tracking-wide">
        MyApp
      </h1>

      {/* Links */}
      <div className="flex space-x-6">
        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
        >
          Sign Up
        </Link>
        <Link
          to="/signin"
          className="px-4 py-2 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold transition"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
