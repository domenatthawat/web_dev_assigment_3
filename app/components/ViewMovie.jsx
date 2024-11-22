"use client";
import React from "react";
import { useState, useEffect } from "react";

const ViewMovie = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/addMovie")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  if (students.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-semibold text-center">Student List</h2>
        <p className="text-center mt-8">No students found.</p>
      </div>
    );
  } else {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center">Student List</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 mb-4">
          {students.map((student) => (
            <li
              key={student.id}
              className="p-4 bg-sky-100 hover:bg-sky-200 rounded-lg shadow-inner"
            >
              <p>
                Name: {student.firstName} {student.lastName}
              </p>
              <p>Date of Birth: {student.dob}</p>
              <p>Grade: {student.grade}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ViewMovie;
