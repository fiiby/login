// const Student = require("../model/studentModel");
// const createError= require("http-errors")
// const mongoose = require('mongoose')
// import {useState} from 'react';

// //Add student
// const Update = () => {
//   const [Update, setUpdate] = useState([]);

//   useEffect(() => {
//     // Fetch students from the server when the component is mounted:
//     axios.get('http://localhost:4000/Student')
//       .then((response) => {
//         setStudents(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching students', error);
//       });
//   }, []);

//     const Update= ()=>{
//   const [data, setData]=useState();

// const handleUpdate = (id) => {
// //     // Add your logic for updating a student here
//      setStudents({...Student, [id.target.name]: id.target.value})
// }

// return(
//  <div>
//    <button onClick={() => handleUpdate(Student.id)}> Update </button>
// </div>
//     )
// };
// export default Update;


// const handleUpdate = (id) => {
  //   // Add your logic for updating a student here
  //   console.log('Update student with ID:', id);
  // };
// full code here:
//
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
  // State to store the list of students
  const [students, setStudents] = useState([]);

  // State to store data for updating a student
  const [updateData, setUpdateData] = useState({
    // Add any necessary fields for updating a student
    // For example: name: '', age: '', etc.
  });

  useEffect(() => {
    // Fetch students from the server when the component is mounted:
    axios.get('http://localhost:4000/Student')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students', error);
      });
  }, []);

  const handleUpdate = (id) => {
    // Find the student by id
    const studentToUpdate = students.find(student => student.id === id);

    // Add your logic for updating a student here
    // For example, you might want to send a PUT request to the server
    // with the updated data in updateData

    // Example: Update the name of the student
    axios.put(`http://localhost:4000/Student/${id}`, {
      name: updateData.name,
      // Add other fields as needed
    })
      .then(response => {
        // Handle the response if necessary
        console.log('Student updated successfully', response);
      })
      .catch(error => {
        console.error('Error updating student', error);
      });
  };

  // Update the corresponding field in updateData when input changes
  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Render a form with input fields for updating student data */}
      {/* Add input fields for each field you want to update */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={updateData.name || ''}
        onChange={handleChange}
      />
      {/* Add other input fields as needed */}
      
      <button onClick={() => handleUpdate(Student.id)}>Update</button>
    </div>
  );
};

export default Update;
