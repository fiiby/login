// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom'


// const DelStudent = () => {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const navigate= useNavigate();


//   useEffect(() => {
//     axios.get(http://localhost:4000/students/${id})

//     .then((response) => {
//         setStudent(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching student details:', error);
//       });
//   }, [id])
//   const deleteStudent = (() => {
//     if (window.confirm( `Are you sure you want to delete ${student.firstName}?`)) {
//       axios.delete(http://localhost:4000/Student/${id})
//     })
//         .then(() => {
//           // Redirect back to the list after deletion
//          navigate('/Student')
//         })
//         .catch((error) => {
//           console.error('Error deleting student:', error);
//         });
//     } else {
//       // Do nothing if the user cancels the deletion
//     }
//   };

//   return (
//     <div className=''>
//          <h3>delete student record:</h3>
//     <div className=''>
       
//       {student ? (
//         <div>
//           <h4>Student Details</h4>
//           <p>First Name: {student.firstName}</p>
//           <p>Last Name: {student.lastName}</p>
//           <button onClick={deleteStudent}>Delete</button>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//     </div>
//   );
// };

// export default DelStudent;


// corrections:
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Delete = () => {
  // Extracting the 'id' parameter from the URL
  const { id } = useParams();

  // State variable to store student details
  const [student, setStudent] = useState(null);

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Effect hook to fetch student details when 'id' changes
  useEffect(() => {
    axios.get(`http://localhost:4000/students/${id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  }, [id]);

  // Function to delete the student
  const deleteStudent = () => {
    if (window.confirm(`Are you sure you want to delete ${student.firstName}?`)) {
      axios.delete(`http://localhost:4000/Student/${id}`)
        .then(() => {
          // Redirect back to the list after deletion
          navigate('/AllStudent');
        })
        .catch((error) => {
          console.error('Error deleting student:', error);
        });
    } else {
      // Do nothing if the user cancels the deletion
    }
  };

  // JSX to render the component
  return (
    <div className=''>
      <h3>Delete student record:</h3>
      <div className=''>
        {student ? (
          <div>
            <h4>Student Details</h4>
            <p>First Name: {student.firstName}</p>
            <p>Last Name: {student.lastName}</p>
            <button onClick={deleteStudent}>Delete</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
 export default Delete;