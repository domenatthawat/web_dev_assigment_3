"use client";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
  });

  const [message, setMessage] = useState("");
 
  const handleInputChange = (e) => {
      const { name, value } = e.target
      console.log("E value", e)
      setFormData({
          ...formData,
          [name]: value
      })
    };
 
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3300/students' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if(response.ok){
            setMessage('User created successfully.');
            setFormData({
              firstName: "",
              lastName: "",
              dob: "",
              grade: "",
            })
        } else {
            setMessage('Failed to create user.');
        }
    } catch (error) {
        throw new  Error('Failed to create user.');
    }
  }
  
  

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-slate-200 shadow-inner rounded-lg flex flex-col items-center text-center w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center ">Add New Student</h2>
      <div className="space-y-4 w-full">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          className="p-2 border rounded w-full"
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          className="p-2 border rounded w-full"
          required
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          className="p-2 border rounded w-full"
          required
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          className="p-2 border rounded w-full"
          required
          onChange={handleInputChange}
        />
        <div className="">
        <button type="submit" className="bg-sky-700 hover:bg-sky-900 ocus:border-transparent text-white p-2 rounded mt-4 w-full ">
          Add Student
        </button>
        </div>
        </div>
    </form>
  );
};

export default Form;
