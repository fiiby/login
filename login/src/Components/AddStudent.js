import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Student} from 'phosphor-react';
import 'react-toastify/dist/ReactToastify.css';
// import {ToastContainer}
import {toast} from 'react-toastify';




const AddStudent= ()=>{
  const [data, setData]=useState({
    firstName:"",
    lastName:"",
    gender:""
  })
  const handleChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }
  const saveStudent=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/student', data)
    .then(res=>{
      toast.success('New Student added successfully', {
        position:toast.POSITION.TOP_RIGHT, 
        autoClose:3000,
      });
      setData(data);
    })
    .catch(err => {
      toast.error('There is an error with your input', {
        position:toast.POSITION.TOP_RIGHT, 
        autoCLose:3000,
      });
    })
  }

  return (
    <form  onSubmit= {saveStudent} className="container">
        <h2 className="header">Add New Student</h2>
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
          <button >Submit</button>
          {/* onClick={handleSignup}>Signup</button> */}
        </div>
      </div>
      
    </form>
  
  );
};

export default AddStudent;

    

