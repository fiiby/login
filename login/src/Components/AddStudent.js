import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Student} from 'phosphor-react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';




const AddStudent= ()=>{
  const [data, setData]=useState({
    firstName:"",
    lastName:"",
    // gender:""
  })
  const handleChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }
  const saveStudent=(e)=>{
    e.preventDefault()

    const token = sessionStorage.getItem("access_token")

    axios.post('http://localhost:4000/student', data, {
      headers: {
        Authorization: `Bearer ${token} `,
        "content-type":'application/json',
      },
    })
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
      // console.log(err.message)
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
         <input type="text" name='firstName'  onChange={handleChange} placeholder=" enter First Name"  required />
          <br />
        </div>
        <div className="input">
          < label>
        <Student size={20} />
          <span> </span>
          Last name:
          </label>
         <input type="text" name='lastName' onChange={handleChange}  placeholder=" enter Last Name"  required/>
        
          <br />
        </div>
    
        <div className="input">
          <button type="submit" >Submit</button>
           <ToastContainer/>
        </div>
      </div>
      
    </form>
  
  );
};

export default AddStudent;

    

