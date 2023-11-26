import React from 'react'
import Login from'./Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import AddStudent from './Components/AddStudent';
import Dashboard from './Dashboard';
import AllStudent from './Components/AllStudent';
import Update from './Components/Update'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './index.css';
// import{ useState } from 'react';


const App = () => {
<div>
  hello world
</div>

  return (
// react-dom version 6:
          <Router>
      <div className="App">
        <Navbar/>
      
      <div className="content">
      
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/Login" element = {<Login/>}/>
          <Route path="/Register" element = {<Register/>}/>
          <Route path="/AddStudent" element ={<AddStudent/>}/>
           <Route path="/dashboard" element ={<Dashboard/>}/>
           <Route path="/AllStudent" element ={<AllStudent/>}/>
           <Route path="/Update" element ={<Update/>}/>
        </Routes>
        </div>

        </div>
      </Router>
    
  );
}

export default App;
