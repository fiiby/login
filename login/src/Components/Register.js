
// // import React, { useState } from 'react';
// // import { UserCircle, Envelope, Password } from 'phosphor-react';

// // const Register = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
    

// //   const handleRegister = (e) => {
// //     setUsername({...username, [e.target.name]: e.target.value})
// //     e.preventDefault();
// // try {
// //       const response = await axios.post('http://localhost:4000/user' , {email, password})
// //       if (response.status === 200) {

// //       const  { accessToken,refreshToken } = response.data;

// //       //save access_token in session storage 
// //       sessionStorage.setItem('access_token' , accessToken);
// //       sessionStorage.setItem('refresh_token', refreshToken);

// //       //Redirect or perform any other action upon successful login
// //       window.location.href = '/Login'; //change the URL to ur desired route
// //     } else {
// //       // const message=response.data.error.message
// //       const errorResponse = await response.data
// //       setError(errorResponse);
// //     }
// //   } catch (error) {
// //     setError("An error occurred. Register the user Please again");
// //   }
// // }
// //     // Perform user registration logic here
// //     // For simplicity, just call onRegister with user data
// //     // onRegister({ username, email, password });
    
// //   };


// //   return (
// //     <form onSubmit={handleRegister} className="container">
// //       <h2 className="header">Register</h2>
// //       <div className="underline"></div>
// //       <div className="inputs">
// //         <div className="input">
// //           <label>
// //             <UserCircle size={30} />
// //             <span> </span>
        
// //           </label>
// //           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder=" User Name" />
// //           <br />
// //         </div>
// //         <div className="input">
// //           <label>
// //          <Envelope size={30} />
// //             <span> </span>
            
// //           </label>
// //           <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="  Enter Email" />
// //           <br />
// //         </div>
// //         <div className="input">
// //           <label>
// //             <Password size={30} />
// //             <span> </span>
          
// //           </label>
// //           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="  Enter Password" />
// //           <br />
// //         </div>
        
// //         <div className="submit-container">
// //           <button className="btn" type="submit">Register</button>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default Register;


// //perfect code with no toast:
// import React, { useState } from 'react';
// import { UserCircle, Envelope, Password } from 'phosphor-react';
// import axios from 'axios'; // Import axios for making HTTP requests

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:4000/User', { username,email, password });

//       if (response.status === 200) {
//         const { accessToken, refreshToken } = response.data;

//         // Save access_token in session storage
//         sessionStorage.setItem('access_token', accessToken);
//         sessionStorage.setItem('refresh_token', refreshToken);

//         // Redirect or perform any other action upon successful login
//         window.location.href = '/Login'; // Change the URL to your desired route
//       } else {
//         const errorResponse = await response.data;
//         setError(errorResponse);
//       }.then(res=>{
//       toast.success('logged in successfully', {
//         position:toast.POSITION.TOP_CENTER,
//         autoclose:3000,
//       });
//       window.location.href ='/AddStudent';
//       // setLogin(login);
//     })
//     } catch (error) {
//       toast.error('There is an error with your input', {
//         position:toast.POSITION.BOTTOM_RIGHT,
//         autoclose:3000,
//       });
//       // console.log(err.message)
//     }
//     }
//   };

//   return (
//     <form onSubmit={handleRegister} className="container">
//       <h2 className="header">Register</h2>
//       <div className="underline"></div>
//       <div className="inputs">
//         <div className="input">
//           <label>
//             <UserCircle size={30} />
//             <span> </span>
//           </label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="User Name"
//           />
//           <br />
//         </div>
//         <div className="input">
//           <label>
//             <Envelope size={30} />
//             <span> </span>
//           </label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Email"
//           />
//           <br />
//         </div>
//         <div className="input">
//           <label>
//             <Password size={30} />
//             <span> </span>
//           </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Password"
//           />
//           <br />
//         </div>

//         {error && <div className="error-message">{error}</div>}

//         <div className="submit-container">
//           <button className="btn" type="submit">
//             Register
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Register;


//with toast:
// import React, { useState } from 'react';
// import { UserCircle, Envelope, Password } from 'phosphor-react';
// import axios from 'axios'; // Import axios for making HTTP requests
//  // Import toast for notifications
// import {ToastContainer, toast} from 'react-toastify'


// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async(e) => {
//     e.preventDefault()
//      try {
//       const response = await axios.post('http://localhost:4000/register', // check is this Reg or reg?
//       { username, email, password });

//       if (response.status === 200) {
//         const { accessToken, refreshToken } = response.data;

//         // Save access_token in session storage
//         sessionStorage.setItem('access_token', accessToken);
//         sessionStorage.setItem('refresh_token', refreshToken);

//         // Show success notification
//         toast.success('Registered successfully', {
//           position: toast.POSITION.TOP_CENTER,
//           autoClose: 3000,
//         });

//         // Redirect to the desired route
//         window.location.href = '/Login';
//       } else {
//         const errorResponse = await response.data;
//         setError(errorResponse);
//       }
//     } catch (error) {
//       // Show error notification
//       toast.error('There is an error with your input', {
//         position: toast.POSITION.BOTTOM_RIGHT,
//         autoClose: 3000,
//       });
//        console.log(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleRegister} className="container">
//       <h2 className="header">Register</h2>
//       <div className="underline"></div>
//       <div className="inputs">
//         <div className="input">
//           <label>
//             <UserCircle size={30} />
//             <span> </span>
//           </label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="User Name"
//           />
//           <br />
//         </div>
//         <div className="input">
//           <label>
//             <Envelope size={30} />
//             <span> </span>
//           </label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Email"
//           />
//           <br />
//         </div>
//         <div className="input">
//           <label>
//             <Password size={30} />
//             <span> </span>
//           </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Password"
//           />
//           <br />
//         </div>

//         <div className="submit-container">
//           <button className="btn" type="submit">
//             Register
//           </button>
//             <ToastContainer/>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Register;

// /////////////
import React, { useState } from 'react';
import { UserCircle, Envelope, Password } from 'phosphor-react';
import axios from 'axios'; // Import axios for making HTTP requests
 // Import toast for notifications
import {ToastContainer, toast} from 'react-toastify';


const Register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');


   const handleUsername = (e) => {
       setUsername(e.target.value);
    }

   const  handleEmail = (e) => {
  setEmail(e.target.value);
   }
   
  const handlePassword = async(e) => {
      setPassword(e.target.value);
  }
  const saveStudent = (e) => {
    e.preventDefault()
     
    axios.post('http://localhost:4000/user', // check is this Reg or reg?
      {email, password })

      // if (response.status === 200) {
        // const { accessToken, refreshToken } = response.data;

        // // Save access_token in session storage
        // sessionStorage.setItem('access_token', accessToken);
        // sessionStorage.setItem('refresh_token', refreshToken);

        // Show success notification
        .then(res => {
          toast.success('Registered successfully', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });

        // Redirect to the desired route
        window.location.href = '/Login';
      })
      .catch (err => {
      // Show error notification
      toast.error('There is an error with your input', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      console.log(err.message);
    })
  };

  return (
    <form onSubmit={saveStudent} className="container">
      <h2 className="header">Register</h2>
      <div className="underline"></div>
      <div className="inputs">
        <div className="input">
          <label>
            <UserCircle size={30} />
            <span> </span>
          </label>
          <input
            type="text"
            value={username}
            onChange={handleUsername}
            placeholder="User Name"
          />
          <br />
        </div>
        <div className="input">
          <label>
            <Envelope size={30} />
            <span> </span>
          </label>
          <input
            type="text"
            value={email}
            onChange={ handleEmail }
            placeholder="Enter Email"
          />
          <br />
        </div>
        <div className="input">
          <label>
            <Password size={30} />
            <span> </span>
          </label>
          <input
            type="password"
            value={password}
            onChange={ handlePassword}
            placeholder="Enter Password"
          />
          <br />
        </div>

        <div className="submit-container">
          <button className="btn" type="submit">
            Register
          </button>
            <ToastContainer/>
        </div>
      </div>
    </form>
  );
};

export default Register;