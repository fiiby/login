import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav >
            {/* className="navbar"> */}
           
          {/* <ul className="list">
            <li className="t-list">Home</li>
            <li className="t-list">Login</li>
            <li className="t-list">Register</li>
             <li className="t-list">Add Student</li>
            </ul> */}
            <div className ="links">
               <Link to="/">Home</Link>
               <Link to="/login">login</Link>
               <Link to="/register">register</Link>
             
            </div>

        </nav>
    );
}
export default Navbar;

//    <div className ="links">
//                <Link to="/">Home</Link>
//                <Link to="/Create">New Blog</Link>
//                <Link to="/About">About</Link>
             
//             </div>