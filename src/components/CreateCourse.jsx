import React, { useContext, useState } from 'react'
import { CourseContext } from '../context/CourseContext';

const CreateCourse = () => {
    const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    imageUrl: "",
    level: "Beginner",
    scholarship: "No",
  });

  const { addCourse } = useContext(CourseContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(formData);
    console.log("Course Created:", formData);
    setFormData({
      title: "",
      description: "",
      duration: "",
      price: "",
      imageUrl: "",
      level: "Beginner",
      scholarship: "No",
    });
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Create Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="title"
          placeholder="enter title here"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
          required
        />

        <textarea
          name="description"
          placeholder="write some description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="course duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
          required
        />

        <input
          type="text"
          name="price"
          placeholder="price of this course"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
          required
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="give the image url"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
          required
        />

        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white border border-yellow-400"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <div className="text-white">
          <label className="block mb-2">Scholarship available</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="scholarship"
                value="Yes"
                checked={formData.scholarship === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="scholarship"
                value="No"
                checked={formData.scholarship === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              no
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
        >
          Create Course
        </button>
      </form>
    </div>
  );
}

export default CreateCourse