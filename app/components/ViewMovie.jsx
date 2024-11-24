"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EditID } from "./EditID";

const ViewMovie = () => {
  const [movies, setMovies] = useState([]);
  const { edit, updateEditID } = EditID();
  const router = useRouter();

  const fetchMovies = () => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => {
        if (!res.ok) {
          console.log("There's an error while fetching movies.");
        }
        return res.json();
      })
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          console.log("There's an error while deleting the movie.");
        }
        return res.json();
      })
      .then(() => fetchMovies())
      .catch((error) => console.error("Error deleting movie:", error));
  };

  const handleEdit = (id) => {
    router.push(`/editMovie?id=${id}`);
    updateEditID(id);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (movies.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center align-middle">
          Movies List
        </h2>
        <p className="text-center mt-8">No movies found.</p>
      </div>
    );
  } else {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center">Movies List</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 mb-4">
          {movies.map((movie) => (
            <li
              key={movie.id} // Ensure your API provides a unique 'id' for each movie
              className="p-4 bg-sky-100 hover:bg-sky-200 rounded-lg shadow-inner"
            >
              <p className="font-bold">Title: {movie.title}</p>
              <p>
                Actors:{" "}
                {Array.isArray(movie.actors)
                  ? movie.actors.join(", ")
                  : movie.actors}
              </p>
              <p>Release Year: {movie.releaseYear}</p>
              <div className="mt-4">
                <button
                  className="bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded"
                  onClick={() => handleEdit(movie.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded ml-2"
                  onClick={() => {
                    handleDelete(movie.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ViewMovie;
