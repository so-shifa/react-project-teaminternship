import React, { useState } from "react";
import { FaUser, FaBook, FaRegClock, FaMoneyBill, FaRegImage } from "react-icons/fa";

const UpdateCourse = () => {
  let [state, setState] = useState({
    name: "",
    description: "",
    duration: "",
    tuitionFee: "",
    imageUrl: "",
    category: "",
    scholarship: "",
  });

  let { name, description, duration, tuitionFee, imageUrl, category, scholarship } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let submit = (e) => {
    e.preventDefault();
    console.log(state);
    alert("Course Updated Successfully!");
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-[380px] rounded-2xl bg-[#f9fafb] shadow-md flex flex-col gap-3 px-6 py-6">
        <h1 className="text-[#1d4ed8] font-bold text-xl text-center">
          Update Course
        </h1>

        <form className="flex flex-col gap-3">
          {/* Course Name */}
          <div className="relative">
            {name === "" && (
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Course Name"
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

          {/* Duration */}
          <div className="relative">
            {duration === "" && (
              <FaRegClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
            <input
              type="text"
              name="duration"
              value={duration}
              placeholder="Enter Duration (e.g., 5 weeks)"
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Tuition Fee */}
          <div className="relative">
            {tuitionFee === "" && (
              <FaMoneyBill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
            <input
              type="number"
              name="tuitionFee"
              value={tuitionFee}
              placeholder="Enter Tuition Fee"
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Image URL */}
          <div className="relative">
            {imageUrl === "" && (
              <FaRegImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
            <input
              type="url"
              name="imageUrl"
              value={imageUrl}
              placeholder="Enter Image URL"
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              name="category"
              value={category}
              onChange={handleChange}
              className="w-full h-10 rounded-md px-10 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select Level --</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Scholarship Available */}
          <div className="flex items-center gap-4 px-1">
            <label className="font-medium text-gray-700">Scholarship available</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-1 text-gray-600">
                <input
                  type="radio"
                  name="scholarship"
                  value="yes"
                  checked={scholarship === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-1 text-gray-600">
                <input
                  type="radio"
                  name="scholarship"
                  value="no"
                  checked={scholarship === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={submit}
            className="font-bold h-10 rounded-md bg-[#FFB900] hover:bg-[#f1a500] transition duration-300"
          >
            Update Course
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateCourse;
