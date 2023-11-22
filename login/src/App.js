import React from 'react'
import Login from'./Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import AddStudent from './Components/AddStudent';
import Dashboard from './Dashboard';
import Student from './Components/Student';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './index.css';
// import{ useState } from 'react';


const App = () => {
  // const [user, setUser] = useState(null);

  // const handleLogin = (userData) => {
  //   // Implement your authentication logic here
  //   setUser(userData);
  // };

  // const handleLogout = () => {
  //   // Implement your logout logic here
  //   setUser(null);
  // };

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
           <Route path="/Student" element ={<Student/>}/>
        </Routes>
        </div>

        </div>
      </Router>
    
  );
}

export default App;
