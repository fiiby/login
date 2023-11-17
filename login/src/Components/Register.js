import React from 'react';

import {UserCircle} from 'phosphor-react';
import {At} from 'phosphor-react';
import {Password} from 'phosphor-react';
// import  { useState } from 'react';

// const Register = ({ onRegister }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     // Perform user registration logic here
//     // For simplicity, just call onSignup with a dummy user object
//     onSignup({ email, password });
//   }
const Register = ()=>{

  return (
    <form className="container">
        <h2 className="header">Register</h2>
        <div className="underline"></div>
      <div className="inputs">
        <div className="input">
          < label>
         <UserCircle size={25} />
          <span> </span>
          Username:
          </label>
         <input type="text"/>
          {/* value={password} onChange={(e) => setPassword(e.target.value)} /> */}
          <br />
        </div>
        <div className="input">
          <label>
          <At size={20}/>
          <span> </span> 
          Email:
          </label>
          <input type="text" />
          {/* value={email} onChange={(e) => setEmail(e.target.value)} /> */}
          <br />
        </div>
     
        <div className="input">
          < label>
          <Password size={20} />
          <span> </span>
          Password:
          </label>
         <input type="password"/>
          {/* value={password} onChange={(e) => setPassword(e.target.value)} /> */}
          <br />
        </div>
      

        <div className="input">
          <button >Register</button>
          {/* onClick={handleSignup}>Signup</button> */}
        </div>
      </div>
      
    </form>
  
  );
};

export default Register;

    

