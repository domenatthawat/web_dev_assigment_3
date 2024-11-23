"use client";
import React, { useState, useEffect } from "react";

const ViewMovie = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch("http://localhost:3300/movies") 
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (movies.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center align-middle">Movies List</h2>
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
              <p>Actors: {Array.isArray(movie.actors) ? movie.actors.join(", ") : movie.actors}</p>
              <p>Release Year: {movie.releaseYear}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ViewMovie;
