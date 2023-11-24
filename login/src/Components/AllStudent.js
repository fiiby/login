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


// AllStudent = Student(actual code that was working before)
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AllStudent = () => {
//   const [students, setStudents] = useState([]);


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

//   return (
//     <div>
//       <h2>Student List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>First name </th>
//              <th>Last name </th>
//              <th> Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//             {AllStudent.map((student) => (
//           <tr key={students.id}>
//             <td>{student.firstName}</td>
//             <td>{student.lastName}</td>
//             <td>update</td>
//             <td>Delete</td>
//             {/* <td key={students.id}> 
//                 <button>Update</button>
//                 <button>Delete</button>
//               </td> */}
        
//        </tr>
//         ))}
//         </tbody>
//         </table> 
//      </div>
//   ); 
//    };
 
//  export default AllStudent;
     
 
/////chat answer:

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Students = () => {
//   const [students, setStudents] = useState([]);

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

//   const handleUpdate = (id) => {
//     // Add your logic for updating a student here
//     console.log('Update student with ID:', id);
//   };

//   const handleDelete = (id) => {
//     // Add your logic for deleting a student here
//     console.log('Delete student with ID:', id);
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>First name</th>
//             <th>Last name</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.firstName}</td>
//               <td>{student.lastName}</td>
//               <td>
//                 <button onClick={() => handleUpdate(student.id)}>Update</button>
//                 <button onClick={() => handleDelete(student.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Students;


// check this code also from chats:

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllStudent = () => {
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
            <th>First name</th>
            <th>Last name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudent;
