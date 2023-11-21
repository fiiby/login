import React from 'react'
import { useState } from 'react';
import {At} from 'phosphor-react';
import {Password} from 'phosphor-react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify'
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

  const loginUser =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/User', {email,password})
    .then(res=>{
      toast.success('logged in successfully', {
        position:toast.POSITION.TOP_CENTER,
        autoclose:3000,
      });
      window.location.href ='/AddStudent';
      // setLogin(login);
    })
    .catch(err => {
      toast.error('There is an error with your input', {
        position:toast.POSITION.BOTTOM_RIGHT,
        autoclose:3000,
      });
      // console.log(err.message)
    })
  }
  return (
    <form  className = "container" onSubmit={loginUser} >
      <h2 className="header">Login</h2>
               <div className = "underline"></div>
               <div className="inputs">
                
      <div className="input">
         <label > <At size={20}/><span> </span> Email:</label>
      <input type="text" value={email}  onChange={handleEmail} /> 
        <br />
      </div>
     <div className="input">
   <label><Password size={20} /><span> </span>Password:</label>
      <input type="password" value={password} onChange={handlePassword} /> 
      <br />
     </div>
   <div className="input">
      <button  className="btn" type="submit">Login</button> 
      <ToastContainer/>
      </div>
   </div>
  
    </form>
  );
}

export default Login;



