
import React, { useState } from 'react';
import { UserCircle, Envelope, Password } from 'phosphor-react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    

  const handleRegister = (e) => {
    e.preventDefault();

    // Perform user registration logic here
    // For simplicity, just call onRegister with user data
    // onRegister({ username, email, password });
  };

  return (
    <form onSubmit={handleRegister} className="container">
      <h2 className="header">Register</h2>
      <div className="underline"></div>
      <div className="inputs">
        <div className="input">
          <label>
            <UserCircle size={30} />
            <span> </span>
        
          </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder=" User Name" />
          <br />
        </div>
        <div className="input">
          <label>
         <Envelope size={30} />
            <span> </span>
            
          </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="  Enter Email" />
          <br />
        </div>
        <div className="input">
          <label>
            <Password size={30} />
            <span> </span>
          
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="  Enter Password" />
          <br />
        </div>
        
        <div className="submit-container">
          <button className="btn" type="submit">Register</button>
        </div>
      </div>
    </form>
  );
};

export default Register;
