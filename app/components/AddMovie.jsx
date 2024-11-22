"use client";

import React, { useState } from "react";

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    actors: "",
    releaseYear: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send data as JSON
      });

      if (response.ok) {
        setMessage("Movie added successfully!");
        setFormData({
          title: "",
          actors: "",
          releaseYear: "",
        });
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "Failed to add movie.");
      }
    } catch (error) {
      console.error("Error adding movie:", error);
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white text-black shadow-2xl rounded-lg flex flex-col items-center text-center w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Add New Movie</h2>
        <div className="space-y-4 w-full">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            className="p-2 border shadow-md rounded-lg w-full"
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="actors"
            placeholder="Actors"
            value={formData.actors}
            className="p-2 border shadow-md rounded-lg w-full"
            required
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="releaseYear"
            placeholder="Release Year"
            value={formData.releaseYear}
            className="p-2 border shadow-md rounded-lg w-full"
            required
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-600 text-white p-2 rounded mt-4 w-full"
        >
          Add Movie
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default AddMovie;
