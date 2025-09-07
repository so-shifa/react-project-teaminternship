import React, { useState } from "react";

const CreateBootcamp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
    website: "",
    address: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, description, website, address, category } = form;
    if (name && email && description && website && address && category) {
      alert("Bootcamp created successfully!");
      // You can add backend logic or reset form here
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-[360px] p-6 rounded-lg bg-gray-900 shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">Create BootCamp</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter name here"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Write some description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400 resize-none"
            required
          />

          {/* Website */}
          <input
            type="text"
            name="website"
            placeholder="Enter a website"
            value={form.website}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
            required
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
            required
          />

          {/* Category Dropdown */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white border border-yellow-400"
            required
          >
            <option value="">Web Development</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
            <option value="uiux">UI/UX Design</option>
          </select>

          {/* Image URL */}
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-yellow-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
          >
            Create BootCamp
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBootcamp;
