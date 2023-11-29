// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const Update = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//     // Fetch student details when the component mounts or 'id' changes
//     axios.get(`http://localhost:4000/Student/${id}`)
//       .then(response => setStudent(response.data))
//       .catch(error => console.error('Error fetching student details:', error));
//   }, [id]);

//   const updateStudent = async (updatedData) => {
//     try {
//       // Update student data with a PATCH request
//       await axios.patch(`http://localhost:4000/Student/${id}`, updatedData);
//       // Navigate back to the 'AllStudent' page after successful update
//       navigate('/Details');
//     } catch (error) {
//       console.error('Error updating student:', error);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     // Convert form data to an object
//     const updatedData = Object.fromEntries(formData.entries());
//     // Update the student with the new data
//     updateStudent(updatedData);
//   };

//   return (
//     <div className="">
//       <h3>Update Student:</h3>
//       {student ? (
//         <div className="">
//           <form onSubmit={handleFormSubmit}>
//             <label>First Name:</label><br />
//             <input type="text" name="firstName" defaultValue={student.firstName} /><br />

//             <label>Last Name:</label><br />
//             <input type="text" name="lastName" defaultValue={student.lastName} /><br />

//             <button type="submit">Update</button>
//           </form>
    
//       </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Update;


// corrections:
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student details when the component mounts or 'id' changes
    axios.get(`http://localhost:4000/Student/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error('Error fetching student details:', error));
  }, [id]);

  const updateStudent = async (updatedData) => {
    try {
      // Update student data with a PATCH request
      await axios.patch(`http://localhost:4000/Student/${id}`, updatedData);
      // Navigate back to the 'Details' page after successful update
      navigate('/Details');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Convert form data to an object
    const updatedData = Object.fromEntries(formData.entries());
    // Update the student with the new data
    updateStudent(updatedData);
  };

  return (
    <div className="">
      <h3>Update Student:</h3>
      {student ? (
        <div className="">
          <form onSubmit={handleFormSubmit}>
            <label>First Name:</label><br />
            <input type="text" name="firstName" defaultValue={student.firstName} /><br />

            <label>Last Name:</label><br />
            <input type="text" name="lastName" defaultValue={student.lastName} /><br />

            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Update;
