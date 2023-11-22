// import {useState} from 'react';

// const AllStudent = ()=> {
//     const [AllStudent, setAllStudent] = useState([]);
//     useEffect(() => {
//       //fetch student from the server when the component is mounts:
//       axios.get('http://localhost:4000/Student')
//       .then((res)=> {
//         setAllStudent(res.data);
//       }).catch.error('Error fetching students', error);
//     });
// },[]); 
    
//     return(
//         <div>
//             <h2> Student List</h2>
//             <ul>
//                 {AllStudent.map((student) => (
//                     <div>
//                         <li key = {student.id}>{student.firstName}</li>
//                         <li key = {student.id} >{student.lastName}</li>
//                     </div>
//     ))}
//             </ul>
//         </div>
//     );
// };
// export default AllStudent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);

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

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>First name </th>
             <th>Last name </th>
          </tr>
        </thead>
        <tbody>
            {students.map((students) => (
          <tr key={students}>
            <td>{students.firstName}</td>
            <td>{students.lastName}</td>
       </tr>
        ))}
        </tbody>
        </table> 
     </div>
  ); 
   };
 
 export default Students;
     
 
/////
