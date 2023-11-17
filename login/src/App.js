import React from 'react'

import Login from'./Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import AddStudent from './Components/AddStudent';
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
    // <div>
    //     <Navbar/>
    //            <Login/>
    //            <Register/>
    //            <AddStudent/>
    
 
    // </div>



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
        </Routes>
        </div>

        </div>
      </Router>
//
//  <Router>
//       <Navbar/>
//         < user={user} handleLogout={handleLogout} /> 
//       <Switch>
//         <Route path="/" exact component={Home} /> 
//      <Route
//           path="/login"
//           render={(props) => <Login {...props} handleLogin={handleLogin} />}
//         /> 
//      <Route path="/signup" component={Signup} /> 
//  </Switch> 
//      </Router> 
    
  );
}

export default App;
