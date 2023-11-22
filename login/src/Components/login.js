import React from 'react'
import { useState } from 'react';
import { Envelope } from 'phosphor-react';
import { Password } from 'phosphor-react';
// import 'react-toastify/dist/ReactToastify.css';
// import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');

 const  handleEmail = (e) => {
  setEmail(e.target.value);
  }
const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  // const saveStudent =(e) =>{
    const loginUser = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:4000/user' , {email, password})
      if (response.status === 200) {

      const  { accessToken,refreshToken } = response.data;

      //save access_token in session storage 
      sessionStorage.setItem('access_token' , accessToken);
      sessionStorage.setItem('refresh_token', refreshToken);

      //Redirect or perform any other action upon successful login
      window.location.href = '/Student'; //change the URL to ur desired route
    } else {
      // const message=response.data.error.message
      const errorResponse = await response.data
      setError(errorResponse);
    }
  } catch (error) {
    setError("An error occurred. Login the user Please again");
  }
}
  
  //   axios.post('http://localhost:4000/User', {email,password})
  //   .then(res=>{
  //     toast.success('logged in successfully', {
  //       position:toast.POSITION.TOP_CENTER,
  //       autoclose:3000,
  //     });
  //     window.location.href ='/AddStudent';
  //     // setLogin(login);
  //   })
  //   .catch(err => {
  //     toast.error('There is an error with your input', {
  //       position:toast.POSITION.BOTTOM_RIGHT,
  //       autoclose:3000,
  //     });
  //     // console.log(err.message)
  //   })
  // }
  return (
    <form  className = "container" onSubmit={loginUser} >
      <h2 className="header">Login </h2>
               <div className = "underline"></div>
               <div className="inputs">
                
      <div className="input">
         <label > <Envelope size={30} /><span> </span> </label>
      <input type="text" value={email}  onChange={handleEmail} placeholder="Email" /> 
        <br />
      </div>
     <div className="input">
   <label><Password size={30} /><span> </span></label>
      <input type="password" value={password} onChange={handlePassword} placeholder="Password" /> 
      <br />
     </div>
   <div className="submit-container">
      <button className="btn" type="submit">Login</button> 
      {/* <ToastContainer/> */}
      </div>
   </div>
  
    </form>
  );
}

export default Login;



