import React from 'react'

import Login from'./Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import AddStudent from './Components/AddStudent';
import { BrowseRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
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




          <Router>
      <div className="App">
        <Navbar/>
      <div className="content">
        {/* <Home/> */}
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
       <Route path="/Login">
        <Login/>
        </Route>
        <Route path="/Register">
        <Register/>
        </Route>
        <Route path="/AddStudent">
          <AddStudent/>
        </Route>
        </Switch>
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
