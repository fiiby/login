import React from 'react'
import '../index.css';
import {At} from 'phosphor-react';
import {Password} from 'phosphor-react';
import { useState } from 'react';



const Login = ({ handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const  handleSubmit = (e) => {
    e.preventDefault();
    
  //   // Perform authentication logic here
  //   // For simplicity, just call onLogin with a dummy user object
  //   onLogin({ email, password });
  }



  return (
    <form  className = "container" onSubmit={handleSubmit} >
      <h2 className="header">Login</h2>
               <div className = "underline"></div>
               <div className="inputs">
                
      <div className="input">
         <label > <At size={20}/><span> </span> Email:</label>
      <input type="text" value={email} 
          onChange={(e) => setEmail(e.target.value)} /> 
        <br />
      </div>
     <div className="input">
   <label><Password size={20} /><span> </span>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
      <br />
     </div>
   <div className="input">
      <button  className="btn" type="submit">Login</button> 
      </div>
   </div>
  
    </form>
  );
}

export default Login;



