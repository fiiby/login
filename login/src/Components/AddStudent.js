import React from 'react';
import {Student} from 'phosphor-react'
import {At} from 'phosphor-react';
import {Password} from 'phosphor-react';


const AddStudent= ()=>{

  return (
    <form className="container">
        <h2 className="header">Add Student</h2>
        <div className="underline"></div>
      <div className="inputs">
        <div className="input">
          < label>
        <Student size={20} />
          <span> </span>
          First name:
          </label>
         <input type="text"/>
          {/* value={password} onChange={(e) => setPassword(e.target.value)} /> */}
          <br />
        </div>
        <div className="input">
          < label>
        <Student size={20} />
          <span> </span>
          Last name:
          </label>
         <input type="text"/>
          {/* value={password} onChange={(e) => setPassword(e.target.value)} /> */}
          <br />
        </div>
        
     <div className="input">
         <label >   <At size={20}/><span> </span> Email:</label>
      <input type="text"/>
      {/* value={email} /> */}
       {/* //onChange={(e) => setEmail(e.target.value)} /> */}
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
          <button >Submit</button>
          {/* onClick={handleSignup}>Signup</button> */}
        </div>
      </div>
      
    </form>
  
  );
};

export default AddStudent;

    

