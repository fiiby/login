import React from 'react'
import '../index.css';
import {At} from 'phosphor-react';
import {Password} from 'phosphor-react';
// import { useState } from 'react';

// export const login = () => {
//   return (


// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Perform authentication logic here
//     // For simplicity, just call onLogin with a dummy user object
//     onLogin({ email, password });
//   }
const Login = ()=> {


  return (
    <form  className = "container">
      <h2 className="header">Login</h2>
               <div className = "underline"></div>
               <div className="inputs">
                
      <div className="input">
         <label >   <At size={20}/><span> </span> Email:</label>
      <input type="text"/>
      {/* value={email} /> */}
       {/* //onChange={(e) => setEmail(e.target.value)} /> */}
        <br />
      </div>
     <div className="input">
   <label><Password size={20} /><span> </span>Password:</label>
      <input type="password"/>
       {/* value={password} /> */}
      {/* onChange={(e) => setPassword(e.target.value)} /> */}
      <br />
     </div>
   <div className="input">
      <button >Login</button>
        {/* onClick={handleLogin}>Login</button> */}
   </div>
      </div>
    </form>
  );
}

export default Login;

    //  <div className = "container">
    //     <div className = "header">
    //         <div className = "text">Sign Up</div>
    //         <div className = "underline"></div>
    //       </div>
    //       <div className = "inputs">

    //           <div className = "input">
    //             {/* <img src={user_icon}  alt=""/> */}
               
    //             <input type = "text"/>
    //           </div>

    //           <div className = "input">
    //             {/* <img src={email_icon} alt=""/> */}
    //             <input type = "email"/>
    //           </div>

    //           <div className = "input">
    //             {/* <img src={password_icon} alt=""/> */}
    //             <input type = "password"/>
    //         </div>
    //       </div>

         
// </div>
// {/* <div>login</div> */}
//   )
// }


