import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav >
           {/* <div className="navbar"> */}
           
            {/* *<ul className="list">
            <li className="t-list">Home</li>
            <li className="t-list">Login</li>
            <li className="t-list">Register</li>
             <li className="t-list">Add Student</li>
            </ul> */}
            
            <div className ="navbar">
                <ul>
              <li> <Link to="/">Home</Link></li>
               <li><Link to="/login">login</Link></li>
               <li><Link to="/register">register</Link></li>
               <li><Link to="/AddStudent">Add Student</Link></li>
             </ul>
            </div>
            {/* </div> */}

        </nav>
    );
}
export default Navbar;

//    <div className ="links">
//                <Link to="/">Home</Link>
//                <Link to="/Create">New Blog</Link>
//                <Link to="/About">About</Link>
             
//             </div>