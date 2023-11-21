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

const AllStudent = () => {
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    // Fetch students from the server when the component is mounted:
    axios.get('http://localhost:4000/Student')
      .then((res) => {
        setAllStudents(res.data);
      })
      .catch((error) => {
        console.error('Error fetching students', error);
      });
  }, []);

  return (
    <div>
      
  <h2>Student List</h2>

 {allStudents.map((student) => (
  <table border="1"  key={student.id}>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>{student.firstName}</td>
        <td>{student.lastName} </td>
      </tr>

    </tbody>
  </table>
 ),
 )}
 </div>
  );
 };
 export default AllStudent;
      {/* <ul>
        {allStudents.map((student) => (
          <div key={student.id}>
            <li>{student.firstName}</li>
            <li>{student.lastName}</li>
          </div>
        ))}
        </ul> */}
    //   </div>
  {/* ); */}
    //   };
    //   export default AllStudent;

