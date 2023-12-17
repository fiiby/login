// // import React from 'react'
// // // import React, { useState } from 'react';

// // // import axios from 'axios'; // Import axios for making HTTP requests

// //  // Import toast for notifications:
// // import {ToastContainer, toast} from 'react-toastify';

// // const Details = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');


// //  const  handleEmail = (e) => {
// //   setEmail(e.target.value);
// //   }
// // const handlePassword = (e)=>{
// //     setPassword(e.target.value)
// //   }

// //   const saveStudent =(e) =>{
// //     e.preventDefault()
    
// //     axios.post('http://localhost:4000/user/login', {email, password}) //endpoint is user

// //       .then(res => {
// //         toast.success('logged in successfully', {
// //         position:toast.POSITION.TOP_CENTER,
// //         autoclose:3000,
// //       });

// //   return (
// //     <div>Details page
// //     <form onSubmit={saveStudent} className="container">
// //       <h2 className="header">Register</h2>
// //       <div className="underline"></div>
// //       <div className="inputs">
// //         <div className="input">
// //           <label>
// //            First Name:
// //           </label>
// //           <input
// //             type="text"
// //             value={firstName}
// //             onChange={handleUsername}
// //             placeholder="User Name"
// //           />
// //           <br />
// //         </div>
// //         <div className="input">
// //           <label>
// //            Last Name:
// //           </label>
// //           <input
// //             type="text"
// //             value={lastName}
// //             onChange={ handleEmail }
// //             placeholder="Enter Email"
// //           />
// //           <br />
// //         </div>
       

// //         <div className="submit-container">
// //           <button className="btn" type="submit">
// //           Update
// //           </button>
// //             <ToastContainer/>
// //         </div>
// //       </div>
// //     </form>
// //     </div>
// //   );
// // }

// // export default Details;


// // corrections:
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const saveStudent = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/Student/id', { firstName, lastName })
     
        
      .then((res) => {
        toast.success('Updatd successfully', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
           navigate('/AllStudent');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Error ', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      });
  };

  return (
    <div>
      <h2>Details page</h2>
      <form onSubmit={saveStudent} className="container">
        <div className="inputs">
          <div className="input">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstName}
              placeholder="First Name"
            />
            <br />
          </div>
          <div className="input">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastName}
              placeholder="Last Name"
            />
            <br />
          </div>

          <div className="submit-container">
           <Link to = "/AllStudent"><button className="btn" type="submit">
              Update
            </button></Link>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
};


export default Details;
