import React, { useState } from "react";
import { FaUser, FaBook, FaGlobe, FaRegFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const UpdateBootCamp = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    description: "",
    website: "",
    address: "",
    category: "",
    imageUrl: "",
  });

  let { name, email, description, website, address, category, imageUrl } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let submit = (e) => {
    e.preventDefault();
    console.log(state);
    alert("Bootcamp Updated Successfully!");
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-[380px] rounded-2xl bg-[#f9fafb] shadow-md flex flex-col gap-3 px-6 py-6">
        <h1 className="text-[#1d4ed8] font-bold text-xl text-center">
          Update BootCamp
        </h1>

        <form className="flex flex-col gap-3">
          {/* Name */}
          <div className="relative">
            {name === "" && (
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            {email === "" && (
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div className="relative">
            {description === "" && (
              <FaBook className="absolute left-3 top-3 text-gray-400" />
            )}
            <textarea
              name="description"
              value={description}
              placeholder="Enter Description"
              onChange={handleChange}
              className="w-full h-20 rounded-md px-10 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Website */}
          <div className="relative">
            {website === "" && (
              <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
            <input
              type="url"
              name="website"
              value={website}
              placeholder="Enter Website"
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Address */}
          <div className="relative">
            {address === "" && (
              <FaRegFileAlt className="absolute left-3 top-3 text-gray-400" />
            )}
            <textarea
              name="address"
              value={address}
              placeholder="Enter Address"
              onChange={handleChange}
              className="w-full h-20 rounded-md px-10 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Category */}
          <div className="relative">
            <select
              name="category"
              value={category}
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select Category --</option>
              <option value="FullStack Development">FullStack Development</option>
              <option value="Web Technologies">Web Technologies</option>
              <option value="DevOps">DevOps</option>
              <option value="DSA">DSA</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="relative">
            {imageUrl === "" && (
              <RxAvatar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
            <input
              type="url"
              name="imageUrl"
              value={imageUrl}
              placeholder="Enter Image Url"
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            onClick={submit}
            className="font-bold h-10 rounded-md bg-[#FFB900] hover:bg-[#f1a500] transition duration-300"
          >
            Update BootCamp
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateBootCamp;
